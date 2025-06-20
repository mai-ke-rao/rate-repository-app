import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
    username: "",
    password: ""
}

const SignIn = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
    })

    const styles = StyleSheet.create({

    })

  return (

    <View>
        <TextInput placeholder='Username' 
        value={formik.values.username}
        
        onChangeText={formik.handleChange('username')} />

       
       <TextInput placeholder='Password' 
        value={formik.values.password}
        secureTextEntry={true}
        onChangeText={formik.handleChange('password')} />

        <Pressable onPress={formik.handleSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  ) 
};

export default SignIn;