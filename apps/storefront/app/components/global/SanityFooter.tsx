import clsx from "clsx";

export default function SanityFooter() {
  return (
    <div className="-my-overlap bg-[#121923] pt-overlap text-white">
      <div
        className={clsx(
          "mx-auto max-w-[47rem] px-4 py-12 text-center text-xl leading-caption", //
          "md:px-8"
        )}
      >
        {/* Intro */}
        <div>
          This demo shows how Sanity.io and <b>Live Story</b> can power
          remarkable storefronts on Shopify&apos;s Hydrogen framework.
        </div>
        {/* Links */}
        <div
          className={clsx(
            "mt-8 grid grid-cols-1 gap-3 text-left text-sm leading-caption",
            "md:grid-cols-3"
          )}
        >
          <a
            className={clsx(
              "space-y-3 rounded-sm border border-white border-opacity-20 p-4 duration-500 ease-out",
              "hover:bg-white hover:bg-opacity-5"
            )}
            href="https://github.com/sanity-io/hydrogen-sanity-demo"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
                fill="#D93D46"
              />
            </svg>
            <div>Explore this demo on Github</div>
          </a>

          <a
            className={clsx(
              "space-y-3 rounded-sm border border-white border-opacity-20 p-4 duration-500 ease-out",
              "hover:bg-white hover:bg-opacity-5"
            )}
            href="https://github.com/sanity-io/sanity-shopify-studio"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              width="19"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.39566 2.93457C2.39566 6.03586 4.31043 7.88113 8.14383 8.85416L12.2059 9.79617C15.8339 10.6296 18.0432 12.6998 18.0432 16.0724C18.0714 17.5417 17.5939 18.9761 16.6905 20.1351C16.6905 16.7702 14.9502 14.9521 10.7524 13.8589L6.76396 12.9517C3.5701 12.2229 1.10494 10.5211 1.10494 6.8577C1.08814 5.443 1.54221 4.06287 2.39566 2.93457"
                fill="#FF3F4A"
              />
              <path
                opacity="0.5"
                d="M14.1942 15.247C15.9268 16.3557 16.6865 17.9064 16.6865 20.1315C15.2524 21.9691 12.733 23.0002 9.77167 23.0002C4.78708 23.0002 1.29865 20.5463 0.523438 16.2821H5.31035C5.92664 18.2398 7.55845 19.1469 9.73678 19.1469C12.3957 19.1469 14.1632 17.728 14.1981 15.2393"
                fill="#FF3F4A"
              />
              <path
                opacity="0.5"
                d="M4.88408 7.53226C4.09292 7.06199 3.44383 6.38625 3.0057 5.57676C2.56758 4.76728 2.35678 3.85425 2.39567 2.93459C3.77941 1.11259 6.18643 0 9.1206 0C14.1982 0 17.1362 2.68262 17.8611 6.45843H13.2563C12.7486 4.96982 11.4772 3.81071 9.15936 3.81071C6.68257 3.81071 4.99261 5.25281 4.89571 7.53226"
                fill="#FF3F4A"
              />
            </svg>

            <div>Try our Sanity Studio for Shopify projects</div>
          </a>

          <a
            className={clsx(
              "space-y-3 rounded-sm border border-white border-opacity-20 p-4 duration-500 ease-out",
              "hover:bg-white hover:bg-opacity-5"
            )}
            href="https://github.com/sanity-io/hydrogen-sanity-demo"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#231F20"
                d="M24 12c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12C0 5.372 5.373 0 12 0c6.628 0 12 5.372 12 12Z"
              />
              <path 
                fill="#fff"
                d="M16.584 11.525a4.848 4.848 0 0 0-1.07-.263l-1.088-.164a2.454 2.454 0 0 1-.608-.167 1.765 1.765 0 0 1-.465-.271c-.239-.213-.36-.509-.36-.888 0-.17.031-.325.08-.474l-.014-1.91a2.57 2.57 0 0 0-1.086.973c-.257.422-.386.911-.386 1.465 0 .78.231 1.387.694 1.82.432.4 1.035.656 1.812.765l1.126.157c.28.04.494.087.644.145.15.06.283.146.396.259.253.226.38.556.38.986 0 .462-.175.822-.524 1.077-.13.096-.284.167-.451.228H7.388V8.349l-1.46.749v7.466s9.596.105 9.984 0h.128v-.035c.405-.124.76-.306 1.067-.548.312-.247.55-.546.716-.896a2.7 2.7 0 0 0 .249-1.163c0-.85-.26-1.502-.78-1.956a2.265 2.265 0 0 0-.709-.44Z"
              />
            </svg>
            <div>Discover Live Story solutions</div>
          </a>
        </div>
        {/* Learn more */}
        <a
          className={clsx(
            "mt-8 inline-flex items-center justify-center gap-1 text-lg text-[#508EEA]",
            "hover:opacity-70"
          )}
          href="https://www.sanity.io"
          rel="noreferrer"
          target="_blank"
        >
          <span>Learn more</span>
        </a>
      </div>
    </div>
  );
}
