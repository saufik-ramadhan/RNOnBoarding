import React, {useState} from 'react';
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  useColorScheme,
  View,
} from 'react-native';

const Assignment1 = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const _soal2: ISoal2[] = [
    {
      jenis: 'penjumlahan',
      color: 'blue',
      onPress: (result: number) =>
        Alert.alert(`Hasil dari penjumlahannya adalah ${result}`),
      tanda: '+',
    },
    {
      jenis: 'pengurangan',
      color: 'green',
      onPress: (result: number) =>
        Alert.alert(`Hasil dari pengurangannya adalah ${result}`),
      tanda: '-',
    },
    {
      jenis: 'perkalian',
      color: 'magenta',
      onPress: (result: number) =>
        Alert.alert(`Hasil dari perkaliannya adalah ${result}`),
      tanda: 'x',
    },

    {
      jenis: 'pembagian',
      color: 'red',
      onPress: (result: number) =>
        Alert.alert(`Hasil dari pembagiannya adalah ${result}`),
      tanda: ':',
    },
  ];

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, styles.content]}>
        <View>
          <Text style={styles.title}>ASSIGNMENT 1</Text>
        </View>
        <Soal1 />
        {_soal2.map((e, i) => {
          return (
            <Soal2
              tanda={e.tanda}
              key={i}
              jenis={e.jenis}
              color={e.color}
              onPress={e.onPress}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const Soal1 = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  }; 

  interface DataDiri {
    nama: string,
    email: string,
    telepon: string,
    alamat?: string,
    hobi?: string
  }

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [telepon, setTelepon] = useState('');
  const [alamat, setAlamat] = useState<string | undefined>();
  const [hobi, setHobi] = useState<string | undefined>();

  const onSubmit = (dataDiri: DataDiri) => 
    Alert.alert('Data Diri', JSON.stringify(dataDiri), [
      {text: 'Ok', onPress: () => {
        setNama(''); setEmail(''); setTelepon(''); setAlamat(''); setHobi('');
      }}
    ]);

  return (
    <View style={[backgroundStyle, styles.tasks]}>
      <Text style={styles.title}>Soal 1</Text>
      <TextInput
        style={styles.textInput}
        value={nama}
        placeholder="Nama*"
        onChangeText={val => setNama(val)}
      />
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder="Email*"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        style={styles.textInput}
        value={telepon}
        placeholder="Telepon*"
        keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
        onChangeText={val => setTelepon(val.replace(/[^0-9]/g, ''))}
      />
      <TextInput
        style={styles.textInput}
        value={alamat}
        placeholder="Alamat"
        onChangeText={val => setAlamat(val)}
      />
      <TextInput
        style={styles.textInput}
        value={hobi}
        placeholder="Hobi"
        onChangeText={val => setHobi(val)}
      />
      <Button
        onPress={() => {
          // Soal 1
          // Requirement:
          // - buat sebuah function yang apabila dipanggil
          //   menampilkan Alert dengan message isian dari form ini
          // - mengimplementasikan interface sesuai dengan tipe data masing-masing input
          // - setelah selesai menampilkan Alert, clear semua input
          const jsonDataDiri = { nama, email, telepon, alamat, hobi }
          return onSubmit(jsonDataDiri)
        }}
        title="Submit"
      />
    </View>
  );
};

interface ISoal2 {
  jenis: 'penjumlahan' | 'pengurangan' | 'perkalian' | 'pembagian';
  color: TextStyle['color'];
  onPress: (result: number) => void;
  tanda: string;
}
const Soal2 = (param: ISoal2) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');

  const onCalculate = (tanda: string) => {
    let result: number
    switch(tanda) {
      case '+': result = eval(`${input1}+${input2}`); break;
      case '-': result = eval(`${input1}-${input2}`); break;
      case 'x': result = eval(`${input1}*${input2}`); break;
      case ':': result = eval(`${input1}/${input2}`); break;
      default: result = NaN
    }
    setInput1('');
    setInput2('');
    return param.onPress(result);
  }

  return (
    <View style={[backgroundStyle, styles.tasks]}>
      <Text style={[styles.title, {color: param.color}]}>
        Soal 2 #{param.jenis}
      </Text>
      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.textInputNumber}
            value={input1?.toString()}
            placeholder="Input 1"
            keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
            onChangeText={val => setInput1(val.replace(/[^0-9]/g, ''))}
            maxLength={10}
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.labelCenter}>{param.tanda}</Text>
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.textInputNumber}
            value={input2}
            placeholder="Input 1"
            keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
            onChangeText={val => setInput2(val.replace(/[^0-9]/g, ''))}
            maxLength={10}
          />
        </View>
      </View>
      <Button
        onPress={() => {
          // Soal 2
          // Requirement:
          // - buat sebuah function yang apabila dipanggil
          //   melakukan perhitungan sesuai dengan jenis perhitungannya
          // - menggunakan callback function: memanggil param.onPress
          // - mengimplementasikan interface
          // - validasi input & convert input sebelum melakukan perhitungan
          // - setelah hitung selesai, clear input
          return onCalculate(param.tanda);
        }}
        title="Hitung"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 1,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  labelCenter: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
  },
  textInputNumber: {
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  tasks: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    marginBottom: 50,
  },
});

export default Assignment1;
