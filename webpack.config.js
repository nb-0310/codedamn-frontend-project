const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Adjust this limit if needed
              name: "[name].[hash:8].[ext]", // Adjust the filename pattern if needed
              outputPath: "assets", // Adjust the output directory if needed
              esModule: false, // Add this option to disable ES modules usage
            },
          },
        ],
      },
    ],
  },
};