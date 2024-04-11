import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/style";
import { Link } from "expo-router";

export default function login() {
    return(
        //div principal
        <View style={styles.imagemBody}>
        {/* imagem senai */}
        <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')} />

        <View style={styles.form}>
        
        <Text style={styles.text}>LOGIN:</Text>

        <TextInput placeholder="Insira seu CPF" style={styles.input} />

        <Text style={styles.text}>SENHA</Text>

        <TextInput secureTextEntry placeholder="Insira sua SENHA" style={styles.input} />

        <View style={styles.subBtn}>
        <TouchableOpacity><Link href={'Cadrastro'} style={styles.subBtn1}>Cadastrar</Link></TouchableOpacity>
        <TouchableOpacity><Link href={'esquecisenha'} style={styles.subBtn1}>Esqueci a senha</Link></TouchableOpacity>
        </View>
        </View>

        <View style={styles.formbtn}>
        <Link href={'Home'} style={styles.btn}>ENTRAR</Link>
        </View>
        </View>
  
    );
}