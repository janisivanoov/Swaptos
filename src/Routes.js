import React from "react";
import PreLaunchBlackOne from "pages/PreLaunchBlackOne";
import PreLaunchBlack from "pages/PreLaunchBlack";
import PreLaunch from "pages/PreLaunch";
import PopUpPreLaunch from "pages/PopUpPreLaunch";
import PreLaunchwhite from "pages/PreLaunchwhite";
import PreLaunchwhite1920 from "pages/PreLaunchwhite1920";
import ExtraBoostwithmoretas from "pages/ExtraBoostwithmoretas";
import ExtraBoostpagewithmor from "pages/ExtraBoostpagewithmor";
import ExtraBoostpage1326 from "pages/ExtraBoostpage1326";
import ExtraBoostpage1920 from "pages/ExtraBoostpage1920";
import UIKIT360REFERRALPAGE from "pages/UIKIT360REFERRALPAGE";
import Referralpage1326 from "pages/Referralpage1326";
import Uikitreferralpage from "pages/Uikitreferralpage";
import PoolpageUIKit from "pages/PoolpageUIKit";
import Poolswithwithdrawal from "pages/Poolswithwithdrawal";
import Poolspageredesigned from "pages/Poolspageredesigned";
import UIkitpoolsnew from "pages/UIkitpoolsnew";
import UIkitFarms from "pages/UIkitFarms";
import UIKitFarmsPage from "pages/UIKitFarmsPage";
import Farmspage from "pages/Farmspage";
import Removeliquiditypopup from "pages/Removeliquiditypopup";
import Tokenpair from "pages/Tokenpair";
import Liquidityconnectedwalle from "pages/Liquidityconnectedwalle";
import Connectedwallet0 from "pages/Connectedwallet0";
import UIkitliquiditypage from "pages/UIkitliquiditypage";
import UiKit360Liquiditypage from "pages/UiKit360Liquiditypage";
import Liquidityconectwallet from "pages/Liquidityconectwallet";
import Swappage1920 from "pages/Swappage1920";
import Swappage1326 from "pages/Swappage1326";
import Error from "pages/Error";
import Errorpage from "pages/Errorpage";
import UIKitmain360 from "pages/UIKitmain360";
import V21920 from "pages/V21920";
import Swaptos1326 from "pages/Swaptos1326";
import UIKIT from "pages/UIKIT";
import Headers from "pages/Headers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/headers" element={<Headers />} />
        <Route path="/uikit" element={<UIKIT />} />
        <Route path="/swaptos1326" element={<Swaptos1326 />} />
        <Route path="/v21920" element={<V21920 />} />
        <Route path="/uikitmain360" element={<UIKitmain360 />} />
        <Route path="/errorpage" element={<Errorpage />} />
        <Route path="/error" element={<Error />} />
        <Route path="/swappage1326" element={<Swappage1326 />} />
        <Route path="/swappage1920" element={<Swappage1920 />} />
        <Route
          path="/liquidityconectwallet"
          element={<Liquidityconectwallet />}
        />
        <Route
          path="/uikit360liquiditypage"
          element={<UiKit360Liquiditypage />}
        />
        <Route path="/uikitliquiditypage" element={<UIkitliquiditypage />} />
        <Route path="/connectedwallet0" element={<Connectedwallet0 />} />
        <Route
          path="/liquidityconnectedwalle"
          element={<Liquidityconnectedwalle />}
        />
        <Route path="/tokenpair" element={<Tokenpair />} />
        <Route
          path="/removeliquiditypopup"
          element={<Removeliquiditypopup />}
        />
        <Route path="/farmspage" element={<Farmspage />} />
        <Route path="/uikitfarmspage" element={<UIKitFarmsPage />} />
        <Route path="/uikitfarms" element={<UIkitFarms />} />
        <Route path="/uikitpoolsnew" element={<UIkitpoolsnew />} />
        <Route path="/poolspageredesigned" element={<Poolspageredesigned />} />
        <Route path="/poolswithwithdrawal" element={<Poolswithwithdrawal />} />
        <Route path="/poolpageuikit" element={<PoolpageUIKit />} />
        <Route path="/uikitreferralpage" element={<Uikitreferralpage />} />
        <Route path="/referralpage1326" element={<Referralpage1326 />} />
        <Route
          path="/uikit360referralpage"
          element={<UIKIT360REFERRALPAGE />}
        />
        <Route path="/extraboostpage1920" element={<ExtraBoostpage1920 />} />
        <Route path="/extraboostpage1326" element={<ExtraBoostpage1326 />} />
        <Route
          path="/extraboostpagewithmor"
          element={<ExtraBoostpagewithmor />}
        />
        <Route
          path="/extraboostwithmoretas"
          element={<ExtraBoostwithmoretas />}
        />
        <Route path="/prelaunchwhite1920" element={<PreLaunchwhite1920 />} />
        <Route path="/prelaunchwhite" element={<PreLaunchwhite />} />
        <Route path="/popupprelaunch" element={<PopUpPreLaunch />} />
        <Route path="/prelaunch" element={<PreLaunch />} />
        <Route path="/prelaunchblack" element={<PreLaunchBlack />} />
        <Route path="/prelaunchblackone" element={<PreLaunchBlackOne />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
