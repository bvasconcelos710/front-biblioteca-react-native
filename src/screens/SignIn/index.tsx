import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "../../components/Button";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Title } from "../../components/Title";
import { ILoginUser, signInSchema } from "../../utils/signInSchema";
import { Container, ContentImage, Image } from "./styles";

import LogoIFPB from "../../assets/logoIFPB.png";

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: zodResolver(signInSchema),
  });

  const navigation = useNavigation();

  function handleUserLogin(data: ILoginUser) {
    Alert.alert("Sucesso", "Conta logada com sucesso", [{ text: "ok" }]);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="position" enabled>
        <Container onLayout={() => navigation.navigate("Maps")}>
          <ContentImage>
            <Image 
            source={LogoIFPB} 
            />
            
          </ContentImage>
          <Title title="Entrar" />
          <View>
            <Controller
              name="matricula"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Matricula"
                  onChangeText={onChange}
                  value={value}
                  inputMode="numeric"
                  keyboardType="numeric"
                  isError={errors?.matricula?.message ? true : false}
                />
              )}
            />
            {!!errors.matricula && (
              <ErrorMessage description={errors.matricula.message} />
            )}
          </View>
          <View>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="Senha"
                  secureTextEntry
                  isError={errors?.password?.message ? true : false}
                />
              )}
            />
            {!!errors.password && (
              <ErrorMessage description={errors.password.message} />
            )}
          </View>
          <Button
            title="Entrar"
            onPress={handleSubmit(handleUserLogin)}
            activeOpacity={0.8}
          />
          <Link
            title="Criar conta"
            onPress={() => navigation.navigate("SignUp")}
            activeOpacity={0.8}
          />
          
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
