import React from "react";
import Layout from "../../UIKit/Layout";

import UIKit from "./UIKit";

import Typography from "./Typography";
import ShareButton from "./ShareButton";
import Block from "./Block";
import Link from "./Link";
import Tag from "./Tag";
import Loading from "./Loading";
import NewIndicator from "./NewIndicator";
import StatusIndicator from "./StatusIndicator";
// import Button from "./Button";
import FAB from "./FAB";
import FlatButton from "./FlatButton";
import RaisedButton from "./RaisedButton";
import IconButton from "./IconButton";
import Title from "./Title";
import TextField from "./TextField";
import StatisticView from "./StatisticView";
import Divider from "./Divider";
import Tooltip from "./Tooltip";
import NotificationBadge from "./NotificationBadge";
import Thumbnail from "./Thumbnail";
import SnackBar from "./SnackBar";
import CollectionGridItem from "./CollectionGridItem";
import CollectionListItem from "./CollectionListItem";
import PersonItem from "./PersonItem";
import MangaItem from "./MangaItem";
import Collapse from "./Collapse";
import PopulatingView from "./PopulatingView";
import SearchBox from "./SearchBox";
import GetAppBar from "./GetAppBar";
import ShowMoreButton from "./ShowMoreButton";
import CheckBox from "./CheckBox";
import RadioBox from "./RadioBox";
import TristateSelectBox from "./TristateSelectBox";
import TristateFilterBox from "./TristateFilterBox";
import Reminder from "./Reminder";
import Menu from "./Menu";
import HUD from "./HUD";
import Dialog from "./Dialog";
import Search from "./Search";
// import Header from "./Header";
import Switch from "./Switch";
import Tabs from "./Tabs";
import GridSystem from "./GridSystem";
import ImageBrowser from "./ImageBrowser";

const title = "UI Kit";

export default {
  path: "/",
  children: [
    {
      path: "/",
      title: "",
      group: "",
      action: () => <h1>Welcome to UIKit</h1>,
    },
    {
      path: "/Typography",
      title: "Typography",
      group: "Visual Language",
      action: () => <Typography />,
    },
    {
      path: "/gridsystem",
      title: "Grid System",
      group: "Grid System",
      action: () => <GridSystem />,
    },
    {
      path: "/ShareButton",
      title: "Share Button",
      group: "Buttons",
      action: () => <ShareButton />,
    },
    {
      path: "/ShowMoreButton",
      title: "Show More Button",
      group: "Buttons",
      action: () => <ShowMoreButton />,
    },
    {
      path: "/Block",
      title: "Block",
      group: "Elements",
      action: () => <Block />,
    },
    {
      path: "/Link",
      title: "Link",
      group: "Elements",
      action: () => <Link />,
    },
    {
      path: "/Tag",
      title: "Tag",
      group: "Elements",
      action: () => <Tag />,
    },
    {
      path: "/Loading",
      title: "Loading",
      group: "Elements",
      action: () => <Loading />,
    },
    {
      path: "/NewIndicator",
      title: "New Indicator",
      group: "Elements",
      action: () => <NewIndicator />,
    },
    {
      path: "/StatusIndicator",
      title: "Status Indicator",
      group: "Elements",
      action: () => <StatusIndicator />,
    },
    {
      path: "/FAB",
      title: "FAB",
      group: "Buttons",
      action: () => <FAB />,
    },
    {
      path: "/FlatButton",
      title: "FlatButton",
      group: "Buttons",
      action: () => <FlatButton />,
    },
    {
      path: "/RaisedButton",
      title: "RaisedButton",
      group: "Buttons",
      action: () => <RaisedButton />,
    },
    {
      path: "/IconButton",
      title: "IconButton",
      group: "Buttons",
      action: () => <IconButton />,
    },
    {
      path: "/Title",
      title: "Title",
      group: "Components",
      action: () => <Title />,
    },
    {
      path: "/TextField",
      title: "TextField",
      group: "Elements",
      action: () => <TextField />,
    },
    {
      path: "/StatisticView",
      title: "Statistic View",
      group: "Elements",
      action: () => <StatisticView />,
    },
    {
      path: "/Divider",
      title: "Divider",
      group: "Elements",
      action: () => <Divider />,
    },
    {
      path: "/Tooltip",
      title: "Tooltip",
      group: "Elements",
      action: () => <Tooltip />,
    },
    {
      path: "/NotificationBadge",
      title: "NotificationBadge",
      group: "Elements",
      action: () => <NotificationBadge />,
    },
    {
      path: "/Thumbnail",
      title: "Thumbnail",
      group: "Components",
      action: () => <Thumbnail />,
    },
    {
      path: "/SnackBar",
      title: "SnackBar",
      group: "Components",
      action: () => <SnackBar />,
    },
    {
      path: "/CollectionItem",
      title: "CollectionGridItem",
      group: "Components",
      action: () => <CollectionGridItem />,
    },
    {
      path: "/CollectionListItem",
      title: "CollectionListItem",
      group: "Components",
      action: () => <CollectionListItem />,
    },
    {
      path: "/PersonItem",
      title: "PersonItem",
      group: "Components",
      action: () => <PersonItem />,
    },
    {
      path: "/MangaItem",
      title: "MangaItem",
      group: "Components",
      action: () => <MangaItem />,
    },
    {
      path: "/Collapse",
      title: "Collapse",
      group: "Components",
      action: () => <Collapse />,
    },
    {
      path: "/PopulatingView",
      title: "PopulatingView",
      group: "Components",
      action: () => <PopulatingView />,
    },
    {
      path: "/SearchBox",
      title: "SearchBox",
      group: "Components",
      action: () => <SearchBox />,
    },
    {
      path: "/GetAppBar",
      title: "GetAppBar",
      group: "Components",
      action: () => <GetAppBar />,
    },
    {
      path: "/CheckBox",
      group: "Selection",
      title: "CheckBox",
      action: () => <CheckBox />,
    },
    {
      path: "/RadioBox",
      group: "Selection",
      title: "RadioBox",
      action: () => <RadioBox />,
    },
    {
      path: "/TristateSelectBox",
      group: "Selection",
      title: "TristateSelectBox",
      action: () => <TristateSelectBox />,
    },
    {
      path: "/TristateFilterBox",
      group: "Selection",
      title: "TristateFilterBox",
      action: () => <TristateFilterBox />,
    },
    {
      path: "/Reminder",
      group: "Components",
      title: "Reminder",
      action: () => <Reminder />,
    },
    {
      path: "/Menu",
      group: "Components",
      title: "Menu",
      action: () => <Menu />,
    },
    {
      path: "/HUD",
      group: "Components",
      title: "HUD",
      action: () => <HUD />,
    },
    {
      path: "/Dialog",
      group: "Components",
      title: "Dialog",
      action: () => <Dialog />,
    },
    {
      path: "/Search",
      group: "Modules",
      title: "Search",
      action: () => <Search />,
    },
    {
      path: "/Switch",
      group: "Elements",
      title: "Switch",
      action: () => <Switch />,
    },
    {
      path: "/Tabs",
      group: "Components",
      title: "Tabs",
      action: () => <Tabs />,
    },
    {
      path: "/ImageBrowser",
      group: "Modules",
      title: "Image Browser",
      action: () => <ImageBrowser />,
    },
  ],

  async action({ next }) {
    const childComponent = await next();
    return {
      title,
      component: (
        <Layout>
          <UIKit menu={this.children} title={title}>
            {childComponent}
          </UIKit>
        </Layout>
      ),
    };
  },
};
