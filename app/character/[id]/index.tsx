import { CharacterType } from "@/app/index";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CharacterDetail() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [character, setCharacter] = useState<CharacterType | null>(null);

  const fetchCharacter = async (id: string) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter({ ...data, origin: data.origin.name });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacter(id);
    if (character) navigation.setOptions({ title: character.name });
  }, [character]);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={{ uri: character?.image }}
      />
      <View style={{ marginTop: 16 }}>
        {[
          { label: "Name", value: character?.name },
          { label: "Gender", value: character?.gender },
          { label: "Species", value: character?.species },
          { label: "Status", value: character?.status },
          { label: "Orgin", value: character?.origin },
        ].map(({ label, value }) => (
          <Text
            key={label}
            style={{
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            {label}: {value}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 16,
    flex: 1,
    display: "flex",
  },
  backBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 10,
  },
});
