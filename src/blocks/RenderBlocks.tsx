import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { Right } from '@/blocks/Right/Component'
import { Slider } from '@/blocks/Slider/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { Logo } from '@/blocks/Logo/Component'
import { ConteComponent } from '@/blocks/Conten/Component'
import { MainBlock } from '@/blocks/Main/Component'
import { OemBlock } from '@/blocks/Oem/Component'
import { DownComponent } from '@/blocks/Down/Component'
import { ContactsBlocks }  from '@/blocks/ContactsBlocks/Component'



const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  right: Right,
  slider: Slider,
  faq: FAQBlock,
  logo: Logo,
  conten: ConteComponent,
  main: MainBlock,
  oem: OemBlock,
  down: DownComponent,
   contactsblocks  :ContactsBlocks
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = ({ blocks }) => {

  if (!blocks?.length) return null;

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block;

        if (blockType && blockType in blockComponents) {
          const Block = blockComponents[blockType as keyof typeof blockComponents] as React.ComponentType<Record<string, unknown>>;

          return (
            <div className="my-16" key={index}>
              <Block {...(block as unknown as Record<string, unknown>)} disableInnerContainer={true} />

            </div>
          );
        }

        return null;
      })}
    </Fragment>
  );
};

