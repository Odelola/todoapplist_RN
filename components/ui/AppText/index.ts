import { VariantProps, createRestyleComponent, createText, createVariant } from '@shopify/restyle'
import { Theme } from "../../../theme"



// const AppTextVariants = createVariant<Theme>({themeKey: 'textVariants', defaults: {
//     backgroundColor: "whiteTextColor"
// }})
// const AppText = createRestyleComponent<VariantProps<Theme, 'textVariants'>, Theme>([AppTextVariants]);
const AppText = createText();

AppText.defaultProps = {
    variant: "regular"
}
export default AppText;