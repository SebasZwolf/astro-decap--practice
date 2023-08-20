import { defineConfig } from 'astro/config';
/*
import DecapCMS from "astro-netlify-cms"
const decap = DecapCMS({
    config : {
        backend : {
            name : 'github',
            branch : 'main',
        },
        publish_mode : "editorial_workflow",
        media_folder : "src/assets",
        collections : [
            {
              name : "blog",
              label : "Blog",
              folder : "src/content/blog",
              create : true,
              slug : "b-{{slug}}",
              fields : [
                {
                  "label": "Layout",
                  "name": "layout",
                  "widget": "hidden",
                  "default": "@layouts/BlogPost.astro"
                },
                {
                  "label": "Title",
                  "name": "title",
                  "widget": "string"
                },
                {
                  "label": "Description",
                  "name": "description",
                  "widget": "string"
                },
                {
                  "label": "Publish Date",
                  "name": "publication",
                  "widget": "datetime"
                },
                {
                  "label": "Hero Image",
                  "name": "thumbnail",
                  "widget": "image",
                  "required" : false,
                },
                {
                  "label": "Body",
                  "name": "body",
                  "widget": "markdown"
                },
              ]
            }
        ]
    },
});
*/

export default defineConfig({
    integrations : [
        //decap
    ]
});
