import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import {Logo} from './Logo.tsx'
  import { useState } from 'react'
import axiosInstance from '../../util/axios.js';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [id, setID] = useState('');
    const [pw, setPW] = useState('');
    const navi = useNavigate();

    // const test = async param => {
    //     await 
    // }

    const handleChangeID = (e) => {
        setID(e.target.value);
    }

    const handleChangePW = (e) => {
        setPW(e.target.value);
    }

    const handleSubmitLogin = async (e) => {
        const formData = new FormData();
        formData.append('name', id)
        formData.append('password', pw)
        await axiosInstance.post('/users/signin', formData)
            .then(res => {
                console.log(res);
                navi('/main')
            }).catch(err => {
                console.log(err)
                alert('왜 틀림')
            })

    }

    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Stack spacing="6">
            <Logo />
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={{ base: 'xs', md: 'sm' }}>윤앤박 로그인</Heading>
              <Text color="fg.muted">
                이곳은 처음이다? <Link href="#">싸인업</Link>
              </Text>
            </Stack>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={{ base: 'transparent', sm: 'bg.surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">아이디</FormLabel>
                  <Input onChange={handleChangeID} value={id} id="email" type="text" style={{ marginBottom: 10}} />
                  <FormLabel htmlFor="email">패스워드</FormLabel>
                  <Input onChange={handleChangePW} value={pw} id="email" type="password" />
                </FormControl>  
              </Stack>

              <Stack spacing="6">
                <Button onClick={handleSubmitLogin}>로그인</Button>

              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    )
}