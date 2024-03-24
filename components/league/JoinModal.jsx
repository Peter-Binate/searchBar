import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "../../tailwind";

const JoinModal = ({ visible, closeModal }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <SafeAreaView
        style={tw`flex-1 items-center justify-center w-full h-full bg-[#0000004d]`}
      >
        <View style={tw`bg-white rounded-lg p-5`}>
          <TouchableOpacity
            onPress={closeModal}
            style={tw`absolute top-2 right-2`}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`text-2xl font-bold mb-2`}>Code de League</Text>
          <Text style={tw`text-lg mb-4`}>
            Invitez vos amis à rejoindre votre league
          </Text>
          <TextInput
            placeholder="715847"
            style={tw`p-5 my-2 border rounded-lg font-bold text-xl`}
          />
          <TouchableOpacity onPress={closeModal}>
            <View style={tw`bg-primaryRed p-5 rounded-lg`}>
              <Text style={tw`text-white text-center uppercase font-semibold`}>
                Valider
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default JoinModal;
