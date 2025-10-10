import clsx from "clsx";
import type { SanityModuleLiveStory } from "livestory-sanity-sdk/storefront";
import { LiveStoryModule } from "livestory-sanity-sdk/storefront";
import type { PortableTextBlock } from "sanity";

type Props = {
  value: PortableTextBlock & SanityModuleLiveStory;
};

export default function LiveStoryBlock({ value }: Props) {
  if (!value) return null;

  return (
    <div
      className={clsx(
        "first:mt-0 last:mb-0", //
        "my-8"
      )}
    >
      <LiveStoryModule module={value} />
    </div>
  );
}
