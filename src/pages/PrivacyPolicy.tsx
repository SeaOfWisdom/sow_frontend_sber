import {
  Box,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

const SubTitle: React.FC<PropsWithChildren> = ({ children }) => (
  <Text
    as="h2"
    fontSize="lg"
    fontFamily="Lora"
    fontWeight="semibold"
    lineHeight={6}
  >
    {children}
  </Text>
);
const Content: React.FC<PropsWithChildren> = ({ children }) => (
  <Text as="p" fontFamily="Golos" lineHeight={7}>
    {children}
  </Text>
);

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const splittedText: (text: string) => React.ReactNode = (text: string) => (
    <>
      {text
        .split('\n')
        .map(t =>
          t.length ? (
            <Content key={Math.random() * Date.now()}>{t}</Content>
          ) : null
        )}
    </>
  );

  return (
    <Box
      p={6}
      w="100%"
      maxW={1020}
      m="auto"
      bg="white"
      borderRadius="xl"
      color="#2A2C35"
    >
      <Stack spacing={8}>
        <Stack>
          <Text
            as="h1"
            fontSize="2xl"
            fontFamily="Lora"
            fontWeight="semibold"
            lineHeight={8}
            mb={4}
          >
            {t('privacy_policy.title')}
          </Text>
          <SubTitle>{t('privacy_policy.one.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.one.text'))}
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.two.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.two.text'))}
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.three.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.three.text'))}
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.four.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.four.text'))}
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.five.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.five.text'))}
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.six.subtitle')}</SubTitle>
          <TableContainer lineHeight={7} whiteSpace="pre-wrap">
            <Table variant="simple">
              <Tbody fontFamily="Golos">
                <Tr>
                  <Td>{t('privacy_policy.six.body.one.item')}</Td>
                  <Td>{t('privacy_policy.six.body.one.text')}</Td>
                </Tr>
                <Tr>
                  <Td>{t('privacy_policy.six.body.two.item')}</Td>
                  <Td>{t('privacy_policy.six.body.two.text')}</Td>
                </Tr>
                <Tr>
                  <Td>{t('privacy_policy.six.body.three.item')}</Td>
                  <Td>{t('privacy_policy.six.body.three.text')}</Td>
                </Tr>
                <Tr>
                  <Td>{t('privacy_policy.six.body.four.item')}</Td>
                  <Td>{t('privacy_policy.six.body.four.text')}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.seven.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.seven.text'))}
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.eight.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.eight.text'))}
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.nine.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.nine.text'))}
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.ten.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.ten.text'))}
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.eleven.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.eleven.text'))}
        </Stack>
        <Stack>
          <SubTitle>{t('privacy_policy.twelve.subtitle')}</SubTitle>
          {splittedText(t('privacy_policy.twelve.text'))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default PrivacyPolicy;
