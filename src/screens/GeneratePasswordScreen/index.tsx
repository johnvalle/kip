import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Button, Icon } from "react-native-elements";

import { CopyButton, CustomHeader, CustomInput, PasswordForm, PasswordStrengthBar, Wrapper } from "../../components";
import { PasswordFormData, PasswordTestResult, theme } from "../../constants";
import { generatePassword, testPassword } from "../../utils";
import styles from "./styles";

type PasswordWithResult = PasswordTestResult & {
  password: string;
};

export default function GeneratePasswordScreen() {
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = React.useState(false);
  const [results, setResults] = React.useState<PasswordWithResult[]>([]);
  const methods = useForm<PasswordFormData>();

  function generatePass(fieldData: PasswordFormData) {
    const count = Array.from({ length: 5 });
    setIsLoading(true);
    let arr = count.map((_, idx) => {
      const password = generatePassword(fieldData);
      const testResult = testPassword(password);
      let passwordWithResult = { ...testResult, password };
      return passwordWithResult;
    });
    // sort list desc by strength
    arr.sort((itemA, itemB) => itemB.score - itemA.score);
    setTimeout(() => {
      setResults(arr);
      setIsLoading(false);
    }, 3000);
  }

  const resetPage = () => setResults([]);

  React.useEffect(() => {
    // reset on unmount
    return resetPage;
  }, [isFocused]);

  return (
    <>
      <CustomHeader />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Wrapper>
          {results.length === 0 ? (
            <FormProvider {...methods}>
              <View style={styles.container}>
                <View>
                  <Text style={[theme.typography.xl, { color: theme.colors.primary }]}>Generate</Text>
                  <Text style={[theme.typography.lg, { color: theme.colors.primaryDark, marginTop: 12 }]}>
                    Criteria
                  </Text>
                  <View
                    style={[theme.typography.md, { color: theme.colors.primaryDark, fontFamily: theme.fonts.regular }]}
                  >
                    <Text style={{ marginVertical: 4 }}>
                      Freely configure the type of password you want and we will generate a list for you.
                    </Text>
                    <Text style={{ marginVertical: 4 }}>To start, provide us the criteria you need to meet.</Text>
                    <PasswordForm />
                  </View>
                </View>
                <Button
                  {...theme.buttons.primary}
                  title="Generate Password"
                  containerStyle={{ paddingBottom: "10%" }}
                  loading={isLoading}
                  onPress={methods.handleSubmit(generatePass)}
                />
              </View>
            </FormProvider>
          ) : (
            <View>
              <Text style={[theme.typography.xl, { color: theme.colors.primary }]}>Generate</Text>
              <Text style={[theme.typography.lg, { color: theme.colors.primaryDark, marginTop: 12 }]}>Results</Text>
              <View style={[theme.typography.md, { color: theme.colors.primaryDark, fontFamily: theme.fonts.regular }]}>
                <Text style={{ marginVertical: 4 }}>
                  Here are some of the passwords we generated based on the criteria you provided.
                </Text>
              </View>
              {results.map(({ score, strength, password }, idx: number) => (
                <View key={idx} style={styles.resultContainer}>
                  <View>
                    <Text style={[theme.typography.lg, { color: theme.colors.primaryDark }]}>{password}</Text>
                    <PasswordStrengthBar score={score} strength={strength} showLabel={false} />
                  </View>
                  <CopyButton value={password} />
                </View>
              ))}
              <View>
                <Button
                  {...theme.buttons.secondary}
                  title="Generate again"
                  containerStyle={{ marginVertical: 10 }}
                  loading={isLoading}
                  onPress={resetPage}
                />
              </View>
            </View>
          )}
        </Wrapper>
      </ScrollView>
    </>
  );
}
