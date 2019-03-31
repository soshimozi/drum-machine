// External Deps
import React from "react";
import Radium from "radium";

import { grey, slightlyDarkerBlack } from "../../theme/variables";
import { labelGreyLarge, autoCursor } from "../../theme/mixins";
import BottomSection from "../bottomSection";

// layout constants
const APP_WIDTH = 1400;
const APP_HEIGHT = 800;
const APP_PADDING = 40;

const HEADER_HEIGHT = 50;
const FOOTER_HEIGHT = 30;

const TOP_BOTTOM_DIVIDER_HEIGHT = 3;
const TOP_HEIGHT = Math.ceil(APP_HEIGHT * 0.64) - TOP_BOTTOM_DIVIDER_HEIGHT * 2;
const BOTTOM_HEIGHT = APP_HEIGHT - TOP_HEIGHT - TOP_BOTTOM_DIVIDER_HEIGHT * 2;

const INSTRUMENT_SEPERATOR_WIDTH = 1;

const TOP_LEFT_WIDTH = Math.ceil(APP_WIDTH * 0.23) - INSTRUMENT_SEPERATOR_WIDTH;
const TOP_RIGHT_WIDTH = APP_WIDTH - TOP_LEFT_WIDTH;

const TOP_HORIZONTAL_SEPERATOR_HEIGHT = TOP_HEIGHT - 10;


class AppLayout extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const styles = {
      pageWrapper: {
        position: "relative",
        width: "100%",
        height: "100%",
        minWidth: APP_WIDTH + APP_PADDING,
        minHeight: APP_HEIGHT + HEADER_HEIGHT + FOOTER_HEIGHT + APP_PADDING,
      },

      wrapper: {
        position: "absolute",
        width: APP_WIDTH,
        height: APP_HEIGHT + HEADER_HEIGHT + FOOTER_HEIGHT,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },

      headerWrapper: {
        width: APP_WIDTH,
        height: HEADER_HEIGHT,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },

      saveLoadClearWrapper: {
        display: "flex",
        flexDirection: "row",
      },

      footerWrapper: {
        width: APP_WIDTH,
        height: FOOTER_HEIGHT,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
      },

      appWrapper: {
        width: APP_WIDTH,
        height: APP_HEIGHT,
        display: "flex",
        flexDirection: "column",
      },

      topBottomDivider: {
        width: APP_WIDTH,
        height: TOP_BOTTOM_DIVIDER_HEIGHT,
        backgroundColor: grey,
      },

      topHorizontalDivider: {
        width: INSTRUMENT_SEPERATOR_WIDTH,
        height: TOP_HORIZONTAL_SEPERATOR_HEIGHT,
        backgroundColor: grey,
      },

      topWrapper: {
        width: APP_WIDTH,
        height: TOP_HEIGHT,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },

      bottomWrapper: {
        width: APP_WIDTH,
        height: BOTTOM_HEIGHT,
      },

      footerText: {
        ...labelGreyLarge,
        ...autoCursor,
      },
    };

    return (
      <div style={styles.pageWrapper}>
        <div style={styles.wrapper}>
          <div style={styles.appWrapper}>
            <div style={styles.topBottomDivider} />
            <div style={styles.bottomWrapper}>
              <BottomSection
                width={APP_WIDTH}
                height={BOTTOM_HEIGHT}
                topLeftWidth={TOP_LEFT_WIDTH}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(AppLayout);