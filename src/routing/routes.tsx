import React from 'react';
import { RouteObject } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Layout from '../components/Layout';
import reducers from '../utils/reducers';
import { Home, PrivacyPolicy } from '../pages';
import ArticleView from '../components/articles/ArticleView';
import ArticleAuthor from '../components/articles/ArticleAuthor';
import Library from '../components/articles/Library';
import HelpAbout from '../components/home/HelpAbout';
import HelpFaqs from '../components/home/HelpFaqs';
import MyLibrary from '../components/articles/MyLibrary';
import MySaved from '../components/articles/MySaved';
import TestWeb3 from '../components/TestWeb3';
import CreateArticle from '../components/author/CreateArticle';
import MyArticle from '../components/author/MyArticle';
import ReviewArticle from '../components/author/ReviewArticle';
import ReviewDetails from '../components/author/ReviewDetails';
import DashboardAuthor from '../components/author/DashboardAuthor';
import AuthorRewards from '../components/author/AuthorRewards';
import ValidatorArticle from '../components/validator/ValidatorArticle';
import WritingReview from '../components/validator/WritingReview';
import WritingReviewSuccess from '../components/validator/WritingReviewSuccess';
import ValidatorRewards from '../components/validator/ValidatorRewards';
import Settings from '../components/settings/Settings';
import SettingsMobile from '../components/settings/SettingsMobile';
import UserAccount from '../components/settings/UserAccount';
import AuthorAccount from '../components/settings/AuthorAccount';
import ValidatorAccount from '../components/settings/ValidatorAccount';
import MailSettings from '../components/settings/MailSettings';
import HelpSettings from '../components/settings/HelpSettings';
import HelpSettingMobile from '../components/settings/HelpSettingMobile';
import RoleAuthor from '../components/settings/RoleAuthor';
import RoleValidator from '../components/settings/RoleValidator';
import ErrorServer from '../components/home/ErrorServer';
import NotFound from '../components/home/NotFound';
import ArticleTransaction from '../components/articles/ArticleTransaction';

const WithProviders: React.FC<{ Component: React.FC }> = ({ Component }) => {
  const store = createStore(reducers);

  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component />
      </Provider>
    </ChakraProvider>
  );
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <WithProviders Component={Layout} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'articles/:id',
        element: <ArticleView />,
      },
      {
        path: '/articles-author/:id',
        element: <ArticleAuthor />,
      },
      // {
      //   path: '/article-transaction',
      //   element: <ArticleTransaction />,
      // },
      {
        path: '/library',
        element: <Library />,
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />,
      },
      // <Route path="/help" element={<Help />} />
      {
        path: '/about',
        element: <HelpAbout />,
      },
      {
        path: '/about/faq',
        element: <HelpFaqs />,
      },
      {
        path: '/my-library',
        element: <MyLibrary />,
      },
      {
        path: '/my-library/saved',
        element: <MySaved />,
      },
      // {
      //   path: '/test',
      //   element: <TestWeb3 />,
      // },

      // AUTHOR
      {
        path: '/author/create',
        element: <CreateArticle />,
      },
      {
        path: '/author/my-articles',
        element: <MyArticle />,
      },
      {
        path: '/author/my-articles/reviews/:id',
        element: <ReviewArticle />,
      },
      {
        path: '/author/my-articles/review/:id/detail',
        element: <ReviewDetails />,
      },
      {
        path: '/author/dashboard',
        element: <DashboardAuthor />,
      },
      {
        path: '/author/rewards',
        element: <AuthorRewards />,
      },

      // VALIDATOR
      {
        path: '/validator/articles-for-review',
        element: <ValidatorArticle />,
      },
      {
        path: '/validator/articles-for-review/:id',
        element: <WritingReview />,
      },
      {
        path: '/validator/writing-review/successfully',
        element: <WritingReviewSuccess />,
      },
      {
        path: '/validator/rewards',
        element: <ValidatorRewards />,
      },

      // SETTINGS
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/settings-mobile',
        element: <SettingsMobile />,
      },
      {
        path: '/settings/account-user',
        element: <UserAccount />,
      },
      {
        path: '/settings/account-author',
        element: <AuthorAccount />,
      },
      {
        path: '/settings/account-validator',
        element: <ValidatorAccount />,
      },
      {
        path: '/settings/mail',
        element: <MailSettings />,
      },
      {
        path: '/settings/help',
        element: <HelpSettings />,
      },
      {
        path: '/settings/help-mobile',
        element: <HelpSettingMobile />,
      },
      {
        path: '/select-author',
        element: <RoleAuthor />,
      },
      {
        path: '/select-validator',
        element: <RoleValidator />,
      },
    ],
  },
  {
    path: '/server-error',
    element: <WithProviders Component={ErrorServer} />,
  },
  {
    path: '*',
    element: <WithProviders Component={NotFound} />,
  },
];
