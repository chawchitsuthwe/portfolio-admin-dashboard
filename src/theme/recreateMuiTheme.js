import { createMuiTheme } from "@material-ui/core";
import { ColorValues } from "./colors";

export const recreateMuiTheme = (
  pcolor = ColorValues.DARKBLUE,
  scolor = ColorValues.LIGHTRED
) => {
  return createMuiTheme({
    palette: {
      primary: {
        main: pcolor,
      },
      secondary: {
        main: scolor,
      }
    }
  });
};
