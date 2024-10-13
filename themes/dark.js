const { colors } = require('../utils/colors');

const theme = {
    name: 'dark-iceberg', // theme name in kebab-case
    displayName: 'Dark Iceberg', // formatted theme name
    theme: {
        // Background, foreground, and highlight values nested directly in the theme 
        // object will serve as the default overwrites for all properties you add.
        background: {
            default: colors['dark-background'],  // primary background color
            success: colors['dark-green'],  // POST request, 200 OK, parameter names
            notice: colors['dark-yellow'],  // PATCH request
            warning: colors['dark-yellow'],  // PUT request
            danger: colors['dark-red'],  // DELETE request
            surprise: colors['dark-purple'],  // accent (Dashboard link, GET request, 
            // SEND button, branch button, add plugin button)
            info: colors['dark-cyan']   // OPTIONS AND HEAD request
        },
        foreground: {
            default: colors['dark-foreground'],    // primary font color
            success: colors['dark-background'],    // secondary font color for success background
            notice: colors['dark-background'],    // secondary font color for notice background
            warning: colors['dark-background'],    // secondary font color for warning background
            danger: colors['dark-background'],    // secondary font color for danger background
            surprise: colors['dark-background'],    // secondary font color for surprise background
            info: colors['dark-background']     // secondary font color for info background
        },
        highlight: {
            default: colors['dark-foreground']      // sidebar highlight color
        },
        // The styles object targets sub-components of the Insomnia application.
        styles: {
            paneHeader: {
                foreground: {
                    surprise: colors['dark-background'], // pane accent font color
                    info: colors['dark-cyan']  // pane response font color
                }
            },
            dialog: {
                background: {
                    default: colors['dark-background'] // modal primary background color
                },
                foreground: {
                    default: colors['dark-foreground']    // modal primary font color
                }
            }
        }
    }
}

module.exports = { theme }