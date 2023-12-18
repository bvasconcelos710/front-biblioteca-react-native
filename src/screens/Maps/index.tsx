import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { Container, MapContainer } from "./styles";

type Coords = {
  latitude: number;
  longitude: number;
};

export function Maps() {
  const [currentLocation, setCurrentLocation] = useState<Coords | null>(null);
  const [markerInfoVisible, setMarkerInfoVisible] = useState<boolean>(false);

  const theme = useTheme();

  async function getMyLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Habilite a permissão para obter localização!");
      return;
    }

    // Definir a localização inicial para as coordenadas fornecidas
    const initialPosition: Coords = {
      latitude: -6.889361971225039,
      longitude: -38.544998012579626,
    };

    setCurrentLocation(initialPosition);
  }

  function handleMarkerPress() {
    setMarkerInfoVisible(true); // Mostra as informações quando o marcador é pressionado
  }

  useEffect(() => {
    getMyLocation();
  }, []);

  return (
    <Container>
      {currentLocation && (
        <MapContainer
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          showsUserLocation
        >
          <Marker
            pinColor={theme.colors.secondary}
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            onPress={handleMarkerPress}
          />
        </MapContainer>
      )}

      {/* Modal de informações do marcador */}
      <Modal
        visible={markerInfoVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setMarkerInfoVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
            <Text>Informações do Local</Text>
            <Text>IFPB - Campus Cajazeiras</Text>
            <Text>R. José Antônio da, R. José Leôncio da Silva, 300</Text>
            <Text>Bairro: Lot. Jardim Oasis</Text>
            <Text>Cidade: Cajazeiras</Text>
            <Text>Estado: Paraíba</Text>
            <Text>CEP: 58900-000</Text>
            <TouchableOpacity onPress={() => setMarkerInfoVisible(false)}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Container>
  );
}
