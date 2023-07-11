import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import ArticleView from "../components/articles/ArticleView";
import CreateArticle from "../components/author/CreateArticle";
import ArticleAuthor from "../components/articles/ArticleAuthor";
import Library from "../components/articles/Library";

import MyArticle from "../components/author/MyArticle";

import MyLibrary from "../components/articles/MyLibrary";
import TestWeb3 from "../components/TestWeb3";

import ReviewArticle from "../components/author/ReviewArticle";
import ReviewDetails from "../components/author/ReviewDetails";

import DoshboardAuthor from "../components/author/DoshboardAuthor";
import AwardsAuthor from "../components/author/AwardsAuthor";
import Help from "../components/home/Help";
import ValidatorArticle from "../components/validator/ValidatorArticle";

import WritingReview from "../components/validator/WritingReview";
import WritingReviewSuccess from "../components/validator/WritingReviewSuccess";

import NotFound from "../components/home/NotFound";
import ErrorServer from "../components/home/ErrorServer";

import ValidatorAwards from "../components/validator/ValidatorAwards";

import MySaved from "../components/articles/MySaved";

import ArticleTransaction from "../components/articles/ArticleTransaction";

import UserAccount from "../components/settings/UserAccount";
import HelpSettings from "../components/settings/HelpSettings";
import MailSettings from "../components/settings/MailSettings";
import TeacherAccount from "../components/settings/TeacherAccount";
import ValidatorAccount from "../components/settings/ValidatorAccount";
import RoleAuthor from "../components/settings/RoleAuthor";
import RoleValidator from "../components/settings/RoleValidator";
import SettingsMobile from "../components/settings/SettingsMobile";
import HelpSettingMobile from "../components/settings/HelpSettingMobile";
import Settings from "../components/settings/Settings";
import HelpAbout from "../components/home/HelpAbout";
import HelpFaqs from "../components/home/HelpFaqs";





const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:id" element={<ArticleView />} />
      <Route path="/articles-author/:id" element={<ArticleAuthor />} />
      <Route path="/article-transaction" element={<ArticleTransaction />} />

      <Route path="/library" element={<Library />} />
      {/* <Route path="/help" element={<Help />} /> */}
      <Route path="/help" element={<HelpAbout />} />
      <Route path="/help/faqs" element={<HelpFaqs />} />
      <Route path="/my-library" element={<MyLibrary />} />
      <Route path="/my-library/saved" element={<MySaved />} />
      <Route path="/test" element={<TestWeb3 />} />

      {/* === author === */}
      <Route path="/author/create" element={<CreateArticle />} />
      <Route path="/author/my-articles" element={<MyArticle/>}/>
      <Route path="/author/my-articles/:id" element={<ReviewArticle/>}/>
      <Route path="/author/my-articles/review/:id/detail" element={<ReviewDetails/>}/>
      <Route path="/author/dashboard" element={<DoshboardAuthor/>}/>
      <Route path="/author/awards" element={<AwardsAuthor/>}/>

      {/* === Validor === */}
      <Route path="/validator/articles-for-review" element={<ValidatorArticle/>}/>
      <Route path="/validator/articles-for-review/:id" element={<WritingReview/>}/>
      <Route path="/validator/writing-review/successfully" element={<WritingReviewSuccess/>}/>
      <Route path="/validator/awards" element={<ValidatorAwards/>}/>
      
      {/* === Settings === */}
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/settings-mobile" element={<SettingsMobile/>}/>
      <Route path="/settings/account-user" element={<UserAccount/>}/>
      <Route path="/settings/account-author" element={<TeacherAccount/>}/>
      <Route path="/settings/account-validator" element={<ValidatorAccount/>}/>
      <Route path="/settings/mail" element={<MailSettings/>}/>
      <Route path="/settings/help" element={<HelpSettings/>}/>
      <Route path="/settings/help-mobile" element={<HelpSettingMobile/>}/>
      <Route path="/select-author" element={<RoleAuthor/>}/>
      <Route path="/select-validator" element={<RoleValidator/>}/>

      {/* === Eror pages === */}
      <Route path="/server-error" element={<ErrorServer/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
  );
};
export default Routers;
