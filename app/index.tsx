import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export type CharacterType = {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  origin: string;
};

export default function Index() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const router = useRouter();

  const loadData = async () => {
    try {
      if (searchInput.length !== 0) {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${searchInput}`
        );
        const data: { results: any[] } = await res.json();
        setCharacters(
          data.results.map((item) => ({
            id: item.id,
            name: item.name,
            image: item.image,
            status: item.status,
            gender: item.gender,
            species: item.species,
            origin: item.origin.name,
          }))
        );
      } else {
        setCharacters([])
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, [searchInput]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for character"
          value={searchInput}
          onChangeText={setSearchInput}
          numberOfLines={1}
        />
      </View>

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.push(`/character/${item.id}/` as any);
            }}
          >
            <View style={styles.characterContainer}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                }}
                source={{ uri: item.image }}
              />
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
            </View>
            <View style={{ height: 1, backgroundColor: "black" }} />
          </Pressable>
        )}
      />

      {searchInput.length === 0 && (
        <View style={styles.emptySearchContainer}>
          <MaterialCommunityIcons
            name="robot-happy-outline"
            size={200}
            color="lightgray"
          />
          <Text style={{ color: "gray", fontSize: 18 }}>
            Search Your favourite Rick and Morty Characters
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 16,
  },
  emptySearchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: -350 }],
  },
  searchBarContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 15,
  },
  searchBar: {
    flex: 1,
    height: 45,
    backgroundColor: "rgba(220, 220, 220, 1)",
    paddingLeft: 18,
    fontSize: 18,
    borderRadius: 15,
  },
  characterContainer: {
    marginVertical: 16,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 50,
  },
});
