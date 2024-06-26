import React from "react";
import { skills, techStackDetails } from "../Details";
import SkillButton from "../Components/SkillButton";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className='container mx-auto max-width pt-10 pb-20 '>
      <section>
        <h1 className='text-2xl text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
          Tech Stack
        </h1>
        <p className='text-content py-2 lg:max-w-3xl'>
          Technologies I've been working with recently
        </p>
      </section>
      {/* skills stack wise */}
      <div>
        {skills.map(({ name, values }, idx) => (
          <section className='mt-4 p-2' key={`skill-${idx}`}>
            <h2 className='text-2xl mb-1 uppercase '>
              {name}
            </h2>
            <div className='flex flex-wrap'>
              {values.map(({ label, Icon }) => (
                <SkillButton key={`label-${label}`} Icon={Icon} label={label} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <section>
        <h1 className='text-2xl pt-10 text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
          {/* EXAMPLES */}
        </h1>
      </section>
      <section className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6'>
        <img src={html} title='html' alt='' />
        <img src={css} title='CSS' alt='' />
        <img src={js} title='JavaScript' alt='' />
        <img src={react} title='React' alt='' />
        <img src={redux} title='Redux' alt='' />
        <img src={tailwind} title='Tailwind CSS' alt='' />
        <img src={bootstrap} title='Bootstrap' alt='' />
        <img src={sass} title='SASS' alt='' />
        <img src={vscode} title='Visual Studio Code' alt='' />
        <img src={git} title='Git' alt='Git' />
        <img src={github} title='Github' alt='Github' />
        <img src={figma} title='Figma' alt='Figma' />
        <img src={npm} title='NPM' alt='NPM' />
        <img src={postman} title='Postman' alt='Postman' />
      </section>
    </main>
  );
}

export default Technologies;
