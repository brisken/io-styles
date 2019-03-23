const Theme = (theme = 'fiori3') => {
    import core from `./${theme}/core`
    import fonts from `./${theme}/fonts`
    import helpers from `./${theme}/helpers`
    import layout from `./${theme}/layout`
    import icons from `./${theme}/icons`
    return [ core, fonts, helpers, layout, icons ]
}
export default Theme

