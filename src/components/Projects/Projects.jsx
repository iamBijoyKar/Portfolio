import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../Home/ProjectCard'
import emojiPixel from '../../assets/pixel-emojis.jpg'
import jsonIcon from '../../assets/jsondb.jpg'
import morseIcon from '../../assets/morse-in-one.jpg'
import testGif from '../../assets/teminal_test_your_luck2-min.gif'
import morseWeb from '../../assets/morse-in-one-web.png'
import morseCodeGen from '../../assets/morse-code-generator.png'
import myBlogImg from '../../assets/my-blog.jpeg'
import xCodeImg from '../../assets/x-code.png'
import floatingHippoImg from '../../assets/Floating-hippo2.png'
import bashScriptsImg from '../../assets/bash-shell-logo.jpg'
import bioDropImg from '../../assets/bio-drop.png'
import svelteKitTyperImg from '../../assets/svelte-kit-typer.png'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      style={{
        color: colorTheme.primaryText,
      }}
      className="flex flex-col justify-center items-center gap-4  w-full min-h-screen text-center my-8 "
    >
      <h1 className="text-3xl text-center font-bold max-w-[800]">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
        <ProjectCard
          title="Bio Drop"
          description="This is a simple web application that allows users to create and share their profile with others."
          image={bioDropImg}
          link="https://bio-drop.netlify.app/"
          delay={0.8}
        />
        <ProjectCard
          title="SvelteKit Typer"
          description="A simple typing practice web app built with Svelte Kit, Tailwind CSS and TypeScript."
          image={svelteKitTyperImg}
          link="https://svelte-kit-typer.netlify.app/"
          delay={0.8}
        />
        <ProjectCard
          title="X Code"
          description="X Code is a Visual Code Editor made with Tauri and React. It is inspired by Visual Studio Code."
          image={xCodeImg}
          link="https://github.com/iamBijoyKar/x-code"
          delay={0.8}
        />
        <ProjectCard
          title="JsonDb"
          description="JsonDb is a open source project of a database cli app, made with json files. It is written in C++."
          image={jsonIcon}
          link="https://github.com/iamBijoyKar/jsondb"
          delay={0.4}
        />
        <ProjectCard
          title="Floating Hippo"
          description="Floating Hippo is a easy to use python 2D simulation library. It is written in Python."
          image={floatingHippoImg}
          link="https://github.com/iamBijoyKar/floating_hippo"
          delay={1}
        />
        <ProjectCard
          title="Emoji Pixel Art"
          description="Emoji Pixel Art is a open source project of pixel arts. It contains emojis in 32x32 canvas made with a free platform called Pixilart."
          image={emojiPixel}
          link="https://github.com/iamBijoyKar/emojis-pixel-art"
          delay={0.2}
        />
        <ProjectCard
          title="Morse in one "
          description="A npm package that converts morse code to text and vice versa. It is written in JavaScript."
          image={morseIcon}
          link="https://github.com/iamBijoyKar/morse-in-one"
          delay={0.6}
        />
        <ProjectCard
          title="Useful Bash Scripts"
          description="A collection of useful bash scripts that I use in my daily life. It is written in bash."
          image={bashScriptsImg}
          link="https://github.com/iamBijoyKar/useful-bash-scripts"
          delay={0.6}
        />
        <ProjectCard
          title="Test Your Luck "
          description="A cli number guessing game. It is written in python. It has unlimited levels. Each level the difficulty increases."
          image={testGif}
          link="https://github.com/iamBijoyKar/test_your_luck"
          delay={1.2}
        />
        <ProjectCard
          title="My Personal Blog "
          description="My personal blog made with Astro. I post articles weekly about programming, tech, etc. "
          image={myBlogImg}
          link="https://blog-bijoy-kar.netlify.app/"
          delay={1.4}
        />
        <ProjectCard
          title="Morse Code Generator "
          description="It will turn English letter in Morse Code as you type. This is a website, so everyone can access through a browser and it has a very simple UI. It is written in HTML, CSS and JavaScript."
          image={morseCodeGen}
          link="https://github.com/iamBijoyKar/morse_code_generator"
          delay={1.6}
        />
        <ProjectCard
          title="Morse in One Website "
          description="A cli number guessing game. It is written in python. It has unlimited levels. Each level the difficulty increases."
          image={morseWeb}
          link="https://github.com/iamBijoyKar/morse-in-one-website"
          delay={1.8}
        />
      </div>
    </div>
  )
}
