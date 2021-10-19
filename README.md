# ocw-hugo-themes

This is a collection of [Hugo](https://gohugo.io/) themes.  They can be used to generate pages related to the OCW website as well as OCW course sites.

## Structure

```
base-theme/
├── assets/
│   ├── css/
│   ├── js/
│   ├── fonts/
│   ├── webpack/ (webpack configuration for building css / js bundles)
│   └── index.js
├── data/
│   └── webpack.json (describes location of rendered webpack assets)
├── layouts/
│   ├── _default/ (standard Hugo base templates)
│   ├── partials/
│   ├── shortcodes/
│   ├── 404.html
│   └── robots.txt
└── static/
    └── images (images inherited by every theme)
course/
├── assets/
│   ├── css/
│   ├── js/
│   └── course.js
├── data/
│   ├── departments.json (map of department numbers)
│   └── search_query_keys.json (map of search query strings)
└── layouts/
    ├── _default/
    ├── pages/
    ├── partials/
    ├── partials/
    ├── resources/
    ├── shortcodes/
    └── home.html
www/
├── archetypes/ (various Hugo markdown templates for manually creating content with "hugo new")
├── assets/
│   ├── css/
│   ├── js/ (contains React based search app)
│   └── www.js
├── content/
│   └── search/
│       └── _index.md (placeholder to tell Hugo to render the search page)
└── layouts/
    ├── _default/
    ├── instructor/
    ├── pages/
    ├── partials/
    ├── search/
    ├── testimonials/
    └── home.html
```

## Themes

### base-theme

The base theme should be inherited first whenever using any of the other themes.  It includes the webpack configuration for building the CSS / JS used by all the themes as well as the base layouts that include the built assets.  Anything that is to be used by all other themes should be placed here.

### course
![18.06 Linear Algebra Spring 2010](https://user-images.githubusercontent.com/12089658/137996002-ade25b96-9c75-4a43-a3c2-715ed68cc976.png)

The course theme is used to render OCW course sites.  Content is generated by [`ocw-studio`](https://github.com/mitodl/ocw-studio) and the structure is defined in [`ocw-hugo-projects`](https://github.com/mitodl/ocw-hugo-projects/blob/main/ocw-course/ocw-studio.yaml).  The main components are "pages" and "resources."  Course sites can be edited in an instance of `ocw-studio` and published to a backend like Github as Hugo markdown content that can be built using the course theme.

### www
![OCW Home Page](https://user-images.githubusercontent.com/12089658/137997162-ab717049-a516-479e-b567-a82a7135e65e.png)

The www theme is primarily responsible for rendering the OCW home page, although there are a few other types of content it is set up to handle including instructors that are rendered in a static JSON API, testimonials and the promotions seen in the carousel.  This content can be edited in an instance of [`ocw-studio`](https://github.com/mitodl/ocw-studio) and it uses the `ocw-www` starter configuration in [`ocw-hugo-projects`](https://github.com/mitodl/ocw-hugo-projects/blob/main/ocw-www/ocw-studio.yaml).

## Local development

### Dependencies

- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- [Hugo](https://gohugo.io/getting-started/installing/)

If you're running the site for the first time, or if dependencies have changed, install dependencies with:

`yarn install`

### External API's

This site requires running instances of [`ocw-studio`](https://github.com/mitodl/ocw-studio) and [`open-discussions`](https://github.com/mitodl/open-discussions) for some functionality.  Search results are provided by `open-discusisons` and `ocw-studio` provides some content for the home page, such as newly added courses and news items.  If you need to work with this functionality you can either run a local instance of either of these projects, or alternatively point at the RC instances and use a browser extension to temporarily disable CORS.

### CORS

The search page at `/search` uses the `open-discussions` search API to source results.  Running this locally and populating it with results can be tedious, so it's often easier to just point your local website at an already running version of the search API.  In order for this to work properly, you will need to use a browser extension for disabling CORS, like Moesif Origin & CORS Changer:

- [Chrome](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US#:~:text=Moesif%20Origin%20%26%20CORS%20Changer&text=This%20plugin%20allows%20you%20to%20send%20cross%2Ddomain%20requests.&text=This%20plugin%20allows%20you%20to%20send%20cross%2Ddomain%20requests%20directly,Allow%2DOrigin%20set%20to%20*.)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/)
### Environment variables

There are some environment variables you can use to configure optional funcionality such as search, `ocw-studio` API integration for new courses and news items on the home page and `ocw-to-hugo` integration to easily source existing OCW course content for testing.  The `.env.example` file will get you started.  Here are the variables and what they do:

| Variable | Example | Description |
| --- | --- | --- |
| `SEARCH_API_URL` | `http://localhost:8063/api/v0/search/` | A URL to an `open-discussions` search API to fetch results from|
| `OCW_STUDIO_BASE_URL` | `http://localhost:8043/` | A URL of an instance of [`ocw-studio`](https://github.com/mitodl/ocw-studio) to fetch home page content from |
| `STATIC_API_BASE_URL` | `http://ocwnext.odl.mit.edu/` | A URL of a deployed Hugo site with a static JSON API to query against |
| `RESOURCE_BASE_URL` | `https://open-learning-course-data-rc.s3.amazonaws.com/` | A base URL to prefix the rendered path to resources with |
| `EXTERNAL_SITE_PATH` | `~/Code/ocw-www/site/` | A path to a Hugo site with content (Pages, Notifications, Promos, Testimonials) to use for local development |
| `AWS_BUCKET_NAME` | `open-learning-course-data-production` | The S3 bucket `ocw-to-hugo` should source course data from |
| `OCW_TEST_COURSE` | `18-06-linear-algebra-spring-2010` | An OCW course ID to use when spinning up a course site for local development with `npm run start:course` |
| `OCW_TO_HUGO_PATH` | `~/Code/ocw-to-hugo/` | A path to a local override of [`ocw-to-hugo`](https://github.com/mitodl/ocw-to-hugo), a library used to generate Hugo markdown content from parsed OCW JSON exports from the legacy site |\
| `OCW_TO_HUGO_OUTPUT_DIR` | `/path/to/Code/ocw-to-hugo/private/output` | Used in `build_all_courses.sh`, this path is iterated and the courses in it have `hugo` run against them to produce course sites.  When running `npm run start:course`, if `DOWNLOAD` is set to 0 the course data will be sourced from this directory. NOTE: This must be an absolute path |
| `OCW_IMPORT_STARTER_SLUG` | `ocw-course` | When generating "New Courses" cards on the home page, the `ocw-studio` API is queried using `OCW_STUDIO_BASE_URL`.  This value determines the `type` used in the query string against the API |
| `COURSE_OUTPUT_DIR` | `/path/to/Code/ocw-www/public/courses` | Used in `build_all_courses.sh`, this path is where the built course sites are output to NOTE: This must be an absolute path |
| `COURSE_BASE_URL` | `http://localhost:3000/courses` | Used in `build_all_courses.sh`, this is the `--baseUrl` argument passed to each course build iterated by the script |
| `VERBOSE` | `0` | Used in `build_all_courses.sh`, if set to `1` this will print verbose output from the course builds to the console |
| `DOWNLOAD` | `1` | Used in `npm run start:course`, if set to `0` this will not download course data from S3 and instead source `OCW_TEST_COURSE` from the specified `OCW_TO_HUGO_OUTPUT_DIR`. If not specified, it will default to 1 and try to download data from S3. |

### Hugo modules
The various components of this theme are meant to be included in your project as modules.  To include any of them, you will need to make an edit to your `config.toml` file and place a `go.mod` alongside it.  Let's say you wanted to create a site named `my-ocw-site` using the tempaltes in the `www` theme.  First, you would add the following to your `config.toml` file:

```toml
[module]
  [[module.imports]]
    path = "github.com/mitodl/ocw-hugo-themes/base-theme"
  [[module.imports]]
    path = "github.com/mitodl/ocw-hugo-themes/www"
  [[module.mounts]]
    source = "archetypes"
    target = "archetypes"
  [[module.mounts]]
    source = "assets"
    target = "assets"
  [[module.mounts]]
    source = "data"
    target = "data"
  [[module.mounts]]
    source = "layouts"
    target = "layouts"
  [[module.mounts]]
    source = "static"
    target = "static"
```

Then, you would run the following commands at the root of your project to initialize your project as a module and pull in the imports we added:

```bash
hugo mod init github.com/username/my-ocw-site
hugo mod get -u
```

After running these commands, you should have a new `go.mod` file in your project with the following contents:

```
module github.com/username/my-ocw-site

go 1.16
```

The github URL should match a repository where you will store your Hugo project.  The repository does not have to exist yet.  If you want to source the modules from a folder on your hard drive add the following lines, replacing your path to `ocw-hugo-themes`.

`go.mod`:
```
module github.com/username/my-ocw-site

go 1.16

replace github.com/mitodl/ocw-hugo-themes/base-theme => /path/to/ocw-hugo-themes/base-theme
replace github.com/mitodl/ocw-hugo-themes/www => /path/to/ocw-hugo-themes/www

```

After making changes to `go.mod` or the module section of `config.toml` you will need to run `hugo mod get -u` again.

### Run the website locally

If you have a Hugo site using this theme in another folder that you would like to run locally, set the `EXTERNAL_SITE_PATH` variable to the path to your site and run:

`npm start`

After a short while, your site should be available at http://localhost:3000/

### Archetypes

The `www` theme contains a number of different archetypes with which to create content in your Hugo site.

#### Pages

There are generic pages that only include the header and a page title, followed by your content.  A new page can be created like this:

`hugo new pages/page.md`

The following file should be created at `content/pages/page.md`:

```markdown
---
title: "Page"
date: 2021-04-15T17:58:31-04:00
---

**Insert content here**

```

#### Testimonials

Testimonial pages are linked from the OCW home page, and are meant to showcase student testimonials.  They can be created like this:

`hugo new testimonials/firstname-lastname.md`

The filename of `firstname-lastname.md` will allow hugo to automatically pull the testimonial student's name out. Once you run the command there will be a new file in `site/content/testimonials/` with some placeholder content. Edit that file to add the content for that student:

```markdown
---
title: "Firstaname Lastname"
name: "Firstaname Lastname"
date: 2021-04-15T17:56:15-04:00
location: ADD LOCATION
occupation: ADD OCCUPATION
image: /images/testimonials/[filename].jpg
leadquote: "One sentence that stands out from the testimonial."
---

# Firstaname Lastname

**Insert learner biography here**

```

#### Homepage Promo Carousel

These are displayed in a carousel on the home page.  You can create a new one using:

`hugo new promos/filename.md`

You should get a file at `content/promos/filename.md` that looks like this:

```markdown
---
title: "Filename"
subtitle: 
link_title:
link_url: https://example.com/promo
date: 2021-04-15T18:02:41-04:00
image: /images/promo-carousel/[filename].jpg
---

```

You'll then also need to check an image file into `static/images/promo-carousel/` and add it to the front matter in the file you just created alongside the URL for the promo. You'll also need to set a title, subtitle, and link text.

### Course sites

Local development on the `course` templates can be done by spinning up a course site using `npm run start:course`.  Course data is fetched using `ocw-to-hugo`.  If a local path to `ocw-to-hugo` isn't specified, the NPM version specified in `package.json` is used.  Either way, an S3 bucket to source OCW parsed JSON from needs to be specified with the environment varible `AWS_BUCKET_NAME`.  For authentication, you can configure CLI access using the AWS credential file as described [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) or set your key / secret in the standard `AWS_ACCESS_KEY` and `AWS_SECRET_ACCESS_KEY` env variables.  Upon running `npm run start:course`, the course with the ID specified in `OCW_TEST_COURSE` will be downloaded from S3 and converted to Hugo content in `private/ocw-to-hugo-output`.
