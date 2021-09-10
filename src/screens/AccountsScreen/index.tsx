import React from "react";
import { ScrollView, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { CreateButton, CustomHeader, Wrapper } from "../../components";
import { theme } from "../../constants";
import { AccountModel } from "../../database/models";

export default function AccountsScreen() {

  const isFocused = useIsFocused();

  async function fetchAccounts() {
    AccountModel.createTable();
    const accounts = await AccountModel.query({ columns: "*" });
  }

  React.useEffect(() => {
    if (isFocused) fetchAccounts();
  }, [isFocused])

  return (
    <>
      <CustomHeader />
      <ScrollView>
        <Wrapper>
          <Text style={[theme.typography.xl, { color: theme.colors.primary }]}>Accounts</Text>
        </Wrapper>
      </ScrollView>
      <CreateButton onButtonPress={() => console.log("Create account")} />
    </>
  );
}
