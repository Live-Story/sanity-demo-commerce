import { useEffect, useState } from "react";

/*type LiveStory = {
  value: {
    reference?: {
      title?: string;
      id?: string;
      type?: string;
    };
  };
};*/

type LiveStoryProps = {
  value: {
    title?: string;
    id?: string;
    type?: string;
  };
};

export default function LiveStoryEmbed({ value }: LiveStoryProps) {
  const { title, id, type } = value ?? {};

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!id || !type || !mounted) return;

    const loadLiveStory = () => {
      const runLiveStory = () => {
        if ((window as any).LiveStory) {
          new (window as any).LiveStory(`ls-${id}`, { type });
          console.log("LiveStory initialized");
        }
      };

      runLiveStory();
    };

    loadLiveStory();
  }, [id, type, mounted]);

  if (!value) return null;

  return (
    <div>
      {/*<div className="border-gray-300 my-8 rounded border p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>Content ID: {id}</p>
        <p>Type: {type}</p>
      </div>*/}
      {mounted && (
        <div
          id={`ls-${id}`}
          data-id={id}
          data-store="STORE_ID"
          style={{ width: "100%" }}
        ></div>
      )}
    </div>
  );
}
