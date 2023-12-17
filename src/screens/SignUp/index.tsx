import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import React from "react";
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
import { Title } from "../../components/Title";
import { IRegisterUser, signUpSchema } from "../../utils/signUpSchema";
import { Container } from "./styles";

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: zodResolver(signUpSchema),
  });

  const navigate = useNavigation();

  function handleUserRegister(data: IRegisterUser) {
    Alert.alert("Sucesso", "Cadastro realizado com sucesso", [
      { text: "Fazer login", onPress: () => navigate.goBack() },
    ]);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="position" enabled>
        <Container>
          <Title title="Criar conta" />

          <View>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  isError={errors?.name?.message ? true : false}
                />
              )}
            />
            {!!errors.name && (
              <ErrorMessage description={errors.name.message} />
            )}
          </View>

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
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  inputMode="email"
                  isError={errors?.email?.message ? true : false}
                />
              )}
            />
            {!!errors.email && (
              <ErrorMessage description={errors.email.message} />
            )}
          </View>

          <View>
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="Telefone"
                  keyboardType="phone-pad"
                  isError={errors?.phone?.message ? true : false}
                />
              )}
            />
            {!!errors.phone && (
              <ErrorMessage description={errors.phone.message} />
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

          <View>
            <Controller
              name="passwordConfirm"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="Confirme a senha"
                  secureTextEntry
                  isError={errors?.passwordConfirm?.message ? true : false}
                />
              )}
            />
            {!!errors.passwordConfirm && (
              <ErrorMessage description={errors.passwordConfirm.message} />
            )}
          </View>

          <Button
            title="Inscrever-se"
            onPress={handleSubmit(handleUserRegister)}
            activeOpacity={0.8}
          />
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
