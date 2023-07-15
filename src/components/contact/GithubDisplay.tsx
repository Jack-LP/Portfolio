import { useState, useEffect } from 'react';
import GithubCard from './GithubCard';

const GithubDisplay = () => {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = () => {
      return fetch('https://api.github.com/users/jack-lp').then((res) =>
        res.json()
      );
    };

    const fetchUserRepos = () => {
      return fetch(
        'https://api.github.com/users/jack-lp/repos?sort=pushed'
      ).then((res) => res.json());
    };

    const fetchAllData = () => Promise.all([fetchUserData(), fetchUserRepos()]);

    fetchAllData()
      .then(([userData, userRepos]) => {
        setUserData(userData);
        setUserRepos(userRepos);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return !isLoading ? (
    <div className='flex flex-col gap-4 font-spaceMono border-2 bg-dark-200 border-dark-100 rounded-md p-10'>
      <div className='flex items-center gap-4'>
        <img
          src={userData.avatar_url}
          alt='Avatar'
          className='w-32 rounded-full'
        />
        <div className='flex flex-col gap-2'>
          <span className='text-xl font-bold font-space'>{userData.name}</span>
          <a
            href={userData.html_url}
            className='text-plum-100'
          >{`@${userData.login}`}</a>
          <span className='text-white/70'>{`Joined ${userData.created_at.substr(
            0,
            10
          )}`}</span>
        </div>
      </div>
      <span className='font-medium text-lg font-space'>{userData.bio}</span>
      <div className='flex gap-6 justify-around bg-dark-300 rounded-md py-8'>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-white/70 text-sm md:text-md font-space'>
            Repos
          </span>
          <span className='text-lg md:text-2xl font-semibold'>
            {userData.public_repos}
          </span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-white/70 text-sm md:text-md font-space'>
            Followers
          </span>
          <span className='text-lg md:text-2xl font-semibold'>
            {userData.followers}
          </span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-white/70 text-sm md:text-md font-space'>
            Following
          </span>
          <span className='text-lg md:text-2xl font-semibold'>
            {userData.following}
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <span>Recently updated:</span>
        <div className='flex flex-col lg:flex-row justify-between gap-4'>
          {userRepos.slice(0, 3).map((item) => (
            <GithubCard
              key={item.id}
              title={item.name}
              desc={item.description}
              lang={item.language}
              link={item.html_url}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
export default GithubDisplay;
