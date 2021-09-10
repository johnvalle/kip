import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { debounce } from "lodash";

import { CustomHeader, CustomInput, PasswordStrengthBar, Wrapper } from "../../components";
import { PasswordTestResult, theme } from "../../constants";
import { testPassword } from "../../utils";
import { Icon } from "react-native-elements";

export default function TestPasswordScreen() {

  const [isLoading, setIsLoading] = React.useState(false);
  const [password, setPassword] = React.useState<string | null>(null);
  const [showPass, setShowPass] = React.useState(false);
  const [result, setResult] = React.useState<PasswordTestResult | null>(null);
  const isFocused = useIsFocused();

  const runTests = React.useCallback(debounce((pass: string) => {
    setIsLoading(true);
    const { score, strength, criteria } = testPassword(pass);
    setIsLoading(false);
    setResult({ score, strength, criteria });
  }, 1000), [])

  function resetEntry() {
    setResult(null);
    setPassword(null);
  }

  React.useEffect(() => {
    if (password) runTests(password);
  }, [password]);

  React.useEffect(() => {
    return resetEntry;
  }, [isFocused]);

  return (
    <>
      <CustomHeader />
      <Wrapper customStyle={{ justifyContent: "space-between" }}>
        <View>
          <Text style={[theme.typography.xl, { color: theme.colors.primary }]}>Test</Text>
          <Text
            style={[
              theme.typography.lg,
              { color: theme.colors.primaryDark, fontFamily: theme.fonts.semiBold, marginTop: 12 },
            ]}
          >
            Hey there!
          </Text>
          <View style={[theme.typography.md, { color: theme.colors.primaryDark, fontFamily: theme.fonts.regular }]}>
            <Text style={{ marginVertical: 4 }}>
              In this part, we perform some tests to check the strength of your password.
            </Text>
            <Text style={{ marginVertical: 4 }}>
              Dont worry! Your password is not stored in our servers. Instead we will provide you with our suggestions
              to further improve your password.
            </Text>
            <Text style={{ marginVertical: 4 }}>
              Input a password in the field below and click the button to run the tests.
            </Text>
            <View>
              <CustomInput
                label="Password"
                placeholder="Enter password"
                secureTextEntry={!showPass}
                disabled={isLoading}
                controllerOnChange={(pass) => setPassword(pass)}
                rightIcon={
                  <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                    <Icon
                      name={showPass ? "eye-off-outline" : "eye-outline"}
                      type="ionicon"
                      color={theme.colors.primary}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            {result && (
              <View style={{ marginTop: 12 }}>
                <View>
                  <Text style={[theme.typography.lg, { color: theme.colors.primaryDark, marginBottom: 8 }]}>
                    Results
                  </Text>
                  <PasswordStrengthBar strength={result.strength} score={result.score} />
                  <View style={{ marginTop: 16 }}>
                    <Text style={[theme.typography.lg, { color: theme.colors.primaryDark, marginBottom: 8 }]}>
                      Recommendations
                    </Text>
                    <View
                      style={[
                        theme.typography.md,
                        { fontFamily: theme.fonts.regular, color: theme.colors.primaryDark },
                      ]}
                    >
                      {result.criteria.isLengthShort && <Text>- Increase the length to at least 8 characters</Text>}
                      {result.criteria.isLengthAve && <Text>- Increase the length to more than 12 characters</Text>}
                      {!result.criteria.hasLowercaseChars && <Text>- Add lowercase letters</Text>}
                      {!result.criteria.hasUppercaseChars && <Text>- Add uppercase letters</Text>}
                      {!result.criteria.hasNumbers && <Text>- Add numbers.</Text>}
                      {!result.criteria.hasSpecialChars && <Text>- Add special characters. (@#$%&?!)</Text>}
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </Wrapper>
    </>
  );
}
