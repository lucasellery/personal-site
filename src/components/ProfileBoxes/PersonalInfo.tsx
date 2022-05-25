import { useEffect, useState } from "react";

export function PersonalInfo() {
  const [avatarUrl, setAvatarUrl] = useState<string>();

  const getGithubData = async () => {
    const response = await fetch(
      "https://api.github.com/users/lucasellery"
    );
    const data = await response.json();
    setAvatarUrl(data?.avatar_url);
  };

  useEffect(() => {
    getGithubData();
  }, []);

  return (
    <div className="bg-brand-500 w-full h-72 rounded-2xl p-8 flex flex-col items-center justify-between drop-shadow-lg">
      <div>
        <img
          src={avatarUrl}
          alt="Imagem de perfil"
          className="w-32 h-32 rounded-full mx-auto border-solid border-2 border-yellow-300 hover:border-yellow-500 hover:duration-200  "
        />
      </div>

      <section className="flex flex-col items-center">
        <h2 className="text-brand-300 font-sans font-bold text-2xl text-center">
          Lucas Arruda Ellery de Albuquerque
        </h2>
        <p className="font-thin text-brand-300 text-sm">Frontend Developer</p>
      </section>
    </div>
  )
}
