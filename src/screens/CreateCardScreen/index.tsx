import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button, Icon } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";

import { CardStackParamList, theme } from "../../constants";
import { CustomInput, CustomSelect, Wrapper } from "../../components";
import { CardModel } from "../../database/models";

type CreateCardScreenNavigationProps = StackNavigationProp<CardStackParamList, "CreateCard">

type CreateCardScreenProps = {
  navigation: CreateCardScreenNavigationProps;
};

type FormData = {
  name: string;
  number: number;
  type: string;
}

export default function CreateCardScreen({ navigation }: CreateCardScreenProps) {

  const { control, handleSubmit, errors } = useForm<FormData>();

  const createCard = handleSubmit(async ({ name, number, type }) => {
    const card = new CardModel({ name, number, type });
    card.save();
    if (card) navigation.goBack();
  }, (err) => console.log(err));

  return (
    <>
      <StatusBar translucent />
      <View
        style={{
          height: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: theme.colors.primaryDark,
          borderBottomRightRadius: 40,
          marginBottom: 24
        }}
      >
        <View
          style={{
            width: "90%",
            display: "flex",
            alignSelf: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" type="ionicon" color={theme.colors.white} />
          </TouchableOpacity>
          <View
            style={{
              marginTop: 24,
            }}
          >
            <Text style={[theme.typography.lg, { color: theme.colors.secondary }]}>Create</Text>
            <Text style={[theme.typography.xl, { color: theme.colors.white, marginTop: 0 }]}>
              Cards<Text style={{ color: theme.colors.secondary }}>.</Text>
            </Text>
          </View>
        </View>
      </View>
      <Wrapper
        customStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View>
            <Text style={[theme.typography.lg, { color: theme.colors.primary }]}>Cards</Text>
            <Text style={[theme.typography.md, { color: theme.colors.primaryDark, fontFamily: theme.fonts.regular }]}>
              Cards are pieces of information you want to be kept in private but accessed quickly.
            </Text>
          </View>
          <View style={{
            marginVertical: 16
          }}>
            <Controller
              control={control}
              render={({ onChange, value }) => (
                <CustomInput
                  label="Name"
                  placeholder="Enter card name"
                  controllerOnChange={(text) => onChange(text)}
                  controllerValue={value}
                  errorMessage={errors.name?.message}
                />
              )}
              name="name"
              rules={{
                required: {
                  value: true,
                  message: "This field is required."
                },
              }}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ onChange, value }) => (
                <CustomInput
                  label="Number"
                  placeholder="Enter card number"
                  controllerOnChange={(text) => onChange(text)}
                  controllerValue={value}
                  errorMessage={errors.number?.message}
                />
              )}
              name="number"
              rules={{
                required: {
                  value: true,
                  message: "This field is required."
                },
              }}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ onChange, value }) => (
                <CustomSelect
                  label="Type"
                  controllerOnChange={(text) => onChange(text)}
                  controllerValue={value}
                  errorMessage={errors.type?.message}
                  data={[
                    { label: "Java", value: "java" },
                    { label: "PHP", value: "php" },
                  ]}
                />
              )}
              name="type"
              rules={{
                required: {
                  value: true,
                  message: "This field is required."
                },
              }}
              defaultValue="java"
            />
          </View>
        </View>
        <Button
          {...theme.buttons.primary}
          title="Create card"
          containerStyle={{ paddingBottom: "10%" }}
          onPress={createCard}
        />
      </Wrapper>
    </>
  );
}
