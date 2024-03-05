const Resources = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center text-gray-700 p-4 pt-0"
    >
      <h4>
        Contact and resources:
      </h4>
      <ul
        className="flex flex-row justify-center gap-2"
      >
        <li>
          <a
            href="https://www.linkedin.com/in/chofitorobles/"
            target="_blank"
            className="text-blue-500 underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Chofito"
            target="_blank"
            className="text-blue-500 underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://1drv.ms/b/s!Ak0agVDRW2Qrguxh49mEpE4oG807Tw?e=0mhGsE"
            target="_blank"
            className="text-blue-500 underline"
          >
            Curriculum
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Resources;
