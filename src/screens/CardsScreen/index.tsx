import React from "react";
import { Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { CompositeNavigationProp, useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import RBSheet from "react-native-raw-bottom-sheet";

import { CreateButton, CustomHeader, DataCard, Wrapper } from "../../components";
import { CardData, DrawerParamList, CardStackParamList, theme } from "../../constants";
import { CardModel } from "../../database/models";
import BottomMenu from "../../components/BottomMenu";

type CardsScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<CardStackParamList, "Home">,
  DrawerNavigationProp<DrawerParamList>
>;

type CardsScreenProps = {
  navigation: CardsScreenNavigationProps;
};

export default function CardsScreen({ navigation }: CardsScreenProps) {
  const [cards, setCards] = React.useState<CardData[]>([]);
  const [activeCard, setActiveCard] = React.useState<string | null>(null);
  const rbSheetRef = React.useRef() as React.RefObject<RBSheet>;
  const isFocused = useIsFocused();

  async function fetchCards() {
    const cards = await CardModel.query({ columns: "*" });
    setCards(cards);
  }

  async function deleteCard() {
    const card = await CardModel.findBy({ uuid_eq: activeCard });
    card.destroy();
    rbSheetRef?.current?.close();
    fetchCards();
  }

  React.useEffect(() => {
    if (isFocused) fetchCards();
  }, [isFocused]);

  return (
    <>
      <CustomHeader />
      <ScrollView>
        <Wrapper>
          <Text style={[theme.typography.xl, { color: theme.colors.primary }]}>Cards</Text>
          {cards.length > 0 &&
            cards.map((card: CardData, idx: number) => (
              <DataCard
                key={idx}
                title={card.name}
                subtitle={card.type}
                onButtonPress={() => {
                  setActiveCard(card.uuid);
                  console.log(card.uuid);
                  rbSheetRef?.current?.open();
                }}
              />
            ))}
        </Wrapper>
      </ScrollView>
      <BottomMenu ref={rbSheetRef}>
        <Button title="Edit Card" onPress={() => navigation.navigate("Cards", { screen: "CreateCard" })} />
        <Button title="Delete Card" type="outline" onPress={deleteCard} />
      </BottomMenu>
      <CreateButton onButtonPress={() => navigation.navigate("Cards", { screen: "CreateCard" })} />
    </>
  );
}
