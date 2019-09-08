# Arch Terminal 

A complete remake of the original [Hugo Terminal theme](https://github.com/panr/hugo-theme-terminal) 
with additional features, new development build, and a totally different 
philosophy.  

Aimed for technical writers, programmers, tech enthusiasts, and 
people with a do-it-yourself (DIY) spirit. 
This theme provides a minimal base theme while providing a lot 
of ways to customize it. 
Be sure to read the [manual](./MANUAL.adoc) for more details. 
Nonetheless, with minimal configuration should be still enough to get started writing  content. 




## Demo 

Demo is available 
[here](https://foo-dogsquared.github.io/hugo-theme-terminal-plus-minus-demo/). 
You can also look for a real-life example on [my frontpage](https://foo-dogsquared.github.io/) and 
[my blog](https://foo-dogsquared.github.io/blog). 
The demo features more posts and also has a documentation of some sort. 

The raw files of the demo is available in 
[a GitHub repo](https://github.com/foo-dogsquared/hugo-theme-terminal-plus-minus-demo/). 
I also recommend to see the 
[config file](https://github.com/foo-dogsquared/hugo-theme-terminal-plus-minus-demo/blob/master/config.toml) 
used in the demo. 
It's also well-commented so you can use it as a starter configuration for this theme. 

This is more like a mini-README so please read the [manual](./MANUAL.adoc) for more details. 




## Features

Here's a general list of options that you can set and experiment with this theme. 

* Support RSS, Atom, and JSON feeds. 
* Suitable for creating a quick single homepage portfolio and/or blogging.
* [MathJax](https://www.mathjax.org/) support. 
* Lazy syntax highlighting support with [highlight.js](https://highlightjs.org/) 
or [PrismJS](https://prismjs.com/). 
* Multilingual mode support. 
* Theme switch toggle (also known as dark mode).
* Customizable normal and alternate theme appearance. The theme will also set 
the alternate theme even if you didn't customize it yourself! 
(Though, may result in ugly colors.) 
* Site breadcrumbs. 
* Customizable social links. 
* Built-in search indexing and widget with [Fuse.js](https://fusejs.io/). 
* Quick taxonomy search query list. 
* Google Analytics integration. 
* Disqus integration. 




## Installation 

Since the theme uses Hugo Pipes, it'll require Hugo extended. 
To check whether you have it installed, run `hugo version` and search for the 
`extended` keyword. Minimum Hugo version required is v0.58.0. 

Also, the remote repo of this project is hosted on GitHub. 
Thus, it uses Git as the version control system. 

On your Hugo project, you can install the theme on two ways:


### Installing by cloning

You can simply clone the Git repo of the theme. 

```sh
git clone https://github.com/foo-dogsquared/hugo-theme-arch-terminal.git themes/arch-terminal # you can change it to an SSH link, if you use it
```

This is a good option if you don't to modify the base theme too much. 
This also provides the advantage of easier updating. 


### Installing with submodule 

You can also install the theme utilizing [Git submodules](GIT_SUBMODULES_LINK). 

```sh
git submodule add https://github.com/foo-dogsquared/hugo-theme-arch-terminal.git themes/terminal 
``` 

If you want to make major changes to the theme, then this might be the option 
you're looking for. 


## Building with the theme 

Now that you have the theme with the project, let's see it in action. 

Run the following command and see the result: 

```sh
hugo serve -t arch-terminal
``` 

You can also add the following into your site configuration to serve with the 
theme without repeating the above command:

```toml
theme = "arch-terminal" 
```



## Basic configuration 

To get started, you can start with a simple and minimal configuration and 
work your way out there. 

The theme is mostly suitable to be simple single-page portfolio or a blogging theme 
(or both). 

Want to start right away? Here's the most minimal configuration of the theme. 

```toml
title = "Arch Terminal"
```

Seriously, that's it. :) 
You just completed the "Hello World" of making a Hugo site. 
[Enjoy the view of your Hugo site with **T R U E M I N I M A L I S M** and no bloat. Shareable on Twitter and all that (maybe I'll disable that by default too in the patch)](./docs/true-hugo-minimalism.png)

Ignore my rambling and let's continue on to the README, shall we. 
Try to follow along the README, if you wish for a more fulfilling experience 
(of configuring a Hugo theme, that is). 


### Configuring appearance 

You can change the appearance of the theme. 
Start by copying `themes/arch-terminal/assets/scss/config.scss` to your own assets 
with similar directory structure (`assets/scss/config.scss`). 

Also, please open `themes/arch-terminal/assets/scss/default.scss` to see the 
variables needed. 

On second thought, here's the SCSS config file (as of 2019-09-07). 

```scss
// Create one at the similar location in your 
// Hugo directory. 

// To know what variables you should modify, take a 
// look at `default.scss`.

// Here's a sample custom config with pretty colors and everything 
// (at least for me) and try with the theme toggle switch. 
// If there's no alternative palette given, it will set the 
// alternate theme automatically for you.

// For those who cares about using font stacks, I've provided a quick list for you 
// It's a mixed combination of free and open source fonts and system fonts, 
// feel free to modify it as you wish
// Monospace: "Fira Code","Source Code Pro","IBM Plex","Monaco","Consolas","Ubuntu Mono","Bitstream Vera Sans Mono",monospace
// Sans: "Fira Sans","Copper Hewitt","IBM Plex",sans
// Serif: "Source Serif Pro","Charter","IBM Plex","Georgia",serif

// Here's a quick sample config for you. Try it out and enable theme toggling for a bit. 
// $background: #703d57;
// $foreground: #dce2c8;
// $accent: #f28a3c;
// $fontFamily: sans-serif;
// $fontSize: 1.2rem;
```

It's empty. You can try to uncomment the comments for a start or open up the 
`default.scss` file from the theme folder to see the available variables. 


### Setting alternative themes 

Here's the best part, it can generate an alternative theme (dark mode or whatever) 
automatically even if you provide those variables. 

Please uncomment the part with the SCSS variables and add the `params.enableThemeToggle` 
in your site configuration like so:

```toml
[params]
    # ... 
    enableThemeToggle = true
```

And see the magic alternative toggle! 

<video width="100%" height="auto" controls>
  <source src="docs/theme-toggle-magic.mp4" type="video/mp4">
</video> 

Go on and change the colors and believe! 


## Making it as a portfolio site 

If you're only using this theme as a portfolio site, the theme only requires 
the following configuration settings in your site configuration (aside from the 
usual): 

* `title` - the title of your site
* `author.name` - the full name of the author 

That's it. 
Of course, it'll result in a barebone portfolio page. 
You can see more options in the [manual](./MANUAL.adoc) at the 
*Making a portfolio site* section. 


### Adding projects 

What would a portfolio be without some featured works? 

In order to show your projects, the theme requires a data file named 
`projects` (`data/projects.{yaml,json,toml}`). 
Make sure that the data file holds a list of objects with specific key/fields. 

I'll show you an example first before showing the required keys. 
The example will be in JSON format since it is easy to create a root array with it. 

```json
[
    {
        "id": "freebies-hunt",
        "name": "Freebies Hunt",
        "link": "https://freebies-hunt.netlify.com/",
        "repo": "https://github.com/foo-dogsquared/freebies-hunt",
        "description": "It's a website of free and open source resources."
    },
    {
        "id": "hugo-theme-arch-terminal",
        "name": "Arch Terminal Hugo Theme",
        "repo": "https://github.com/foo-dogsquared/hugo-theme-arch-terminal"
    },
    {
        "id": "latex-note-manager",
        "repo": "https://github.com/foo-dogsquared/a-remote-repo-full-of-notes-of-things-i-do-not-know-about/"
    }
]
``` 

Here are the following keys that the theme finds and how it relates with the 
output:

* `id` - The identifier of the project. It'll be used as the basis for sorting 
the project list. Take advantage of this if you want certain projects to be 
featured first. _It is required._

* `name` - The name of the project that'll appear in the output. This is an 
optional key. If there's no `name` key, it'll use the `id` as the name, instead. 

* `link` - The working link of the project. It could be an optional website or 
the working version of the web app. You should not put the software repo link 
here. Also optional. 

* `repo` - The repo of the project whether be it a GitHub repo, Sourceforge page, 
or a Subversion repo. It is an optional key. 

* `description` - The description of the project. Optional as eff. 

If you have a valid data at the ready and compiled it with the theme, you should 
have a projects section at your homepage. 

With the earlier example, it should show similar to the result below:

![The barebones portfolio #1](./docs/barebones-portfolio-1.png) 

Yeah. It's lacking something. Let's add some contact links for the porfolio. 


### Adding contact 

What would a portfolio be without the creator's recognition? 

You can add a list of contact by providing a data file named `contacts` 
(`data/contacts.{json,yaml,toml}`). 
Similar to the projects data file, it should hold a list/array of objects with 
specific keys/fields. 

Like with the projects, I'll show you another example first. 
And another thing... it'll be in JSON format again. 

```json
[
    {
        "id": "github",
        "url": "https://github.com/foo-dogsquared/",
        "name": "GitHub"
    },
    {
        "id": "keybase",
        "url": "https://keybase.io/foo_dogsquared",
        "name": "Keybase"
    },
    {
        "id": "twitter",
        "url": "https://twitter.com/foo_dogsquared"
    }
]
``` 

Now, the list of keys. Thankfully, it's a lot shorter this time. 

* `id` - The identifer of the contact. Similar to the `id` key from 
the `projects` data. _Also required._ 

* `url` - The URL of the contact link. _Also required._ 

* `name` - The name that'll appear in the output. Similar to the `name` key 
from the `projects` data, it'll use the `id` key if it's absent. _Optional._

The results from the previous example? A list of contact links in the footer. 

![Contact links in the footer](./docs/contact-links-sample.png) 


### Filling the rest of the content

Something's missing in the portfolio. 
Oh! It's the description (and perhaps other stuff). 
You can simply create a new content file named `_index.{md,adoc}` and write 
some stuff about it. 

You can create another page at `content/$NAME.{md,adoc}` and write some more. 
However, the theme will not list any top-level pages. 
That's convenient. Though, I do need a way to make it accessible for the visitor. 

A simple problem requires simple answer. We'll just add it into the main menu at 
the header. 

Configuring menus is not different from any other themes (though, nested menus 
are not supported). 

Let's say we have the following content directory structure:

```sh
content
├── about.adoc
├── contact.adoc
└── _index.adoc # This is your homepage content
```

To make them accessible through a menu, simply write similar configuration that follows:

```toml
[menu]
    [[menu.main]]
        identifier = "about"
        name = "About"
        url = "about/"

    [[menu.main]]
        identifier = "contact"
        name = "Contact"
        url = "contact/"
        
```

Ta-da! Now, you have a simple and complete portfolio page with the projects, contacts, 
stuff, and everything! 


### Other options 

You can fiddle with other options. 
Please see [the manual](./MANUAL.adoc) for more information and options. 

I'm pretty sure you want to see how to configure some theme and alternative themes, 
or how you could add a quick support section where you can e-beg for stuff. 



## Making it as a blogging theme 

Let's say you want to make it as a blogging theme as well. 
This theme has you covered. 

Take note that most of the stuff from making the portfolio site applies to 
this section. 

Compared to configuring it as a portfolio site, this is where you'll seeing 
[the manual](./MANUAL.adoc) multiple times. 
Be sure to know it well so you'll have less problems settling with this theme. 

Now, the theme aims to be minimal but customizable enough. 
Unfortunately, the theme takes the meaning of minimal to its heart. 
Therefore, some of the usual features you would normally see in most of the 
Hugo themes are disabled by default and you have to manually activate it. 

* Listing posts on the homepage? You have to set `params.showPostsOnHome` to `true` for that. 

* A theme toggle switch (dark mode toggle)? Turn the `params.enableThemeToggle` on, please. 

* How about some lazy syntax highlighting where you don't have to rely on the 
`highlight` shortcode? Activate the `params.enableLazySyntaxHighlighting` switch! 

* Can you please turn on the MathJax support on `params.enableMathjax`, honey? I'm dying 
of the lack of MathJax support over here.  

* Have you forget to check if the `params.enableContentPagination` is on again? 
Now I don't have a "Read more" section on my post page. 

* Thanks, sir! Good thing you enabled `params.enableBreadcrumbs` or else I would've lost 
in that website for hours on end! 

If those situations happened to you previously, 
[you should've read the manual more](./MANUAL.adoc) and check the _Making a blog site_ section 
to see the available options. 

### Starter configuration 

If you don't want to check the options for now, here's a starter config you 
can fiddle around with. 
Simply uncomment/comment the options that you want to enable/disable. 
It should be enough for starting a "minimal" blog site.

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "Arch Terminal"
description = "Generic description!"
summaryLength = 15
paginate = 5
copyright = "Unless explicitly stated, all content released here are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0)."
canonifyURLs = true

[params]
    # The subtitle of the blog. Mostly appears in the <title> tag.
    subtitle = "Blogger"
    keywords = ["John Dodo", "ordinary-extinction", "blog"]

    # The tagline that'll appear in the homepage as the first header. 
    tagline = "Making near destructive blogs all around the world."
    
    # Show posts on home. :)
    showPostsOnHome = true
    
    # Indicates if the site sections should be listed instead.
    # Requires `showPostsOnHome` to be enabled.
    # listSiteSectionsOnHome = true 

    # Puts a pagination section on the posts linking to the previous and next posts.
    # enableContentPagination = true

    # Enables syntax highlighting. ;p
    # enableLazySyntaxHighlighting = true

    # Set the syntax highlighter to be used. 
    # Only valid options are "highlighterjs" or "prismjs".
    # By default, it uses highlighter.js as the syntax highlighter if there's no set value. 
    # syntaxHighlighter = "prismjs"
    
    # Indicates to show the icon whether the link leads to a page or a section. 
    # The effect is visible if `showPostsOnHome` is at least enabled. 
    # showPageTypeIcon = true
    
    # Shows breadcrumbs in the post.
    # enableBreadcrumbs = true

    # Places a theme toggle button at the header logo
    # enableThemeToggle = true

    # Enable MathJax support
    # enableMathjax = true

    # If you want to use MathJax v2
    # setMathjaxToV2 = true

    # If you don't want to rely on a CDN, you can use the theme's local copy
    # useLocalMathjax = true

    # 404
    notFoundHeader = "404 Not Found :("
    notFoundLinkMessage = "Now get back here."
    notFoundMessage = "I see you're an explorer. I like that."

    # Enable content counters similar to LaTeX counters
    # useContentCounters = true
``` 


### RSS, Atom, and JSON feeds support 

For those who are looking to find more ways of distributing their content into the 
world of crap, an output feed might fill your needs. 

This theme support three major output feed formats: 
[RSS](https://cyber.harvard.edu/rss/rss.html), [Atom](https://tools.ietf.org/html/rfc4287), 
and [JSON feeds](https://jsonfeed.org/). 
The theme also support output feeds for site sections so that your visitors 
can subscribe to only a specific section of your site. 

In order to enable it, utilize [custom output formats](https://gohugo.io/templates/output-formats) 
to your Hugo site config. 

Here's a sample template of enabling support of all of them. 

```toml
[mediaTypes]
    [mediaTypes."application/atom+xml"]
        suffixes = ["atom"]
    
    [mediaTypes."application/rss+xml"]
        suffixes = ["rss"]

[outputFormats]
    [outputFormats.RSS]
        mediaType = "application/rss+xml"
        baseName = "index"
        isPlainText = false
        
    [outputFormats.Atom]
        mediaType = "application/atom+xml"
        baseName = "index"
        isPlainText = false

[outputs]
    home = ["HTML", "RSS", "ATOM", "JSON"]
    section = ["HTML", "RSS", "ATOM", "JSON"]

```

You can access them through `{{ $.Site.BaseURL }}/index.{rss,atom,json}`. 

For specific site sections, you can visit them through the following template link: 

```
{{ $.Site.BaseURL }}/{{ section }}/index.{rss,atom,json}
```


## Manual  

This is mentioned multiple times already but be sure to 
read the [extensive manual](./MANUAL.adoc) of this theme to know more options. 
This document only opens up a part of the things that you can do with 
this theme. 

You think you can escape the manual? Not a chance.
