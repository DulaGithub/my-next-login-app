import Head from 'next/head';
import { ChakraProvider, Box, Heading, Input, Button, Link, Center, Image } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <div className="bg-ash min-h-screen">
        <Head>
          <title>Login | Your App Name</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Center minH="100vh" flexDirection="column">
          <Image src="/your-logo.png" alt="Your Logo" mb={4} mx="auto" />

          <Box w="100%" maxW="400px" p={8} rounded="md" boxShadow="lg" bg="white">
            <Heading as="h2" size="xl" mb={6} textAlign="center">
              Login to your Account
            </Heading>

            <form>
              <Box mb={4}>
                <label htmlFor="username" className="text-sm font-semibold mb-1">
                  Username:
                </label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  variant="filled"
                />
              </Box>

              <Box mb={4}>
                <label htmlFor="password" className="text-sm font-semibold mb-1">
                  Password:
                </label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  variant="filled"
                />
              </Box>

              <Button type="submit" colorScheme="blue" size="lg" w="100%" mb={6}>
                Login
              </Button>
            </form>

            <Box textAlign="center">
              <p className="mb-2">OR</p>
              <Button variant="outline" size="lg" w="100%" mb={2}>
                Continue with Google
              </Button>
            </Box>

            <Box textAlign="center" mt={4}>
              <Link color="blue.500" href="#">
                Issues? Contact us
              </Link>
            </Box>
          </Box>
        </Center>
      </div>
    </ChakraProvider>
  );
}
