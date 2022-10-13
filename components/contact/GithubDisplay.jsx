import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getFromStorage } from '../../utilities/getFromStorage';
import RepoCard from './RepoCard';

const GithubDisplay = () => {
  const [userData, setUserData] = useState(getFromStorage('userData') || null);
  const [userRepos, setUserRepos] = useState(
    getFromStorage('userRepos') || null
  );
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await axios(`https://api.github.com/users/jack-lp`, {
        method: 'GET',
        url: 'https://api.github.com/users/jack-lp',
      });
      setUserData(result.data);
    };

    const fetchUserRepos = async () => {
      const result = await axios(
        `https://api.github.com/users/jack-lp/repos?sort=pushed`,
        {
          method: 'GET',
          url: 'https://api.github.com/users/jack-lp/repos?sort=pushed',
        }
      );
      setUserRepos(result.data);
    };

    if (
      !localStorage.getItem('userData') ||
      !localStorage.getItem('userRepos')
    ) {
      fetchUserData();
      fetchUserRepos();
    }
  }, []);

  useEffect(() => {
    userData && localStorage.setItem('userData', JSON.stringify(userData));
    userRepos && localStorage.setItem('userRepos', JSON.stringify(userRepos));
  }, [userData, userRepos]);

  useEffect(() => {
    userData &&
      setDisplay(
        <div className='w-2/3 mx-auto flex flex-col gap-4 font-mono border-[3px] border-[#a3a3a3] p-10'>
          <div className='flex items-center gap-4'>
            <img
              src={userData.avatar_url}
              alt='Avatar'
              className='w-32 rounded-full'
            />
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-bold'>{userData.name}</span>
              <a
                href={userData.html_url}
                className='text-emerald-600'
              >{`@${userData.login}`}</a>
              <span className='text-white/70'>{`Joined ${userData.created_at.substr(
                0,
                10
              )}`}</span>
            </div>
          </div>
          <span className='font-semibold text-lg'>{userData.bio}</span>
          <div className='flex gap-6 justify-around bg-charcoal-200 p-8'>
            <div className='flex flex-col items-center gap-2'>
              <span className='text-white/70'>Repos</span>
              <span className='text-2xl font-semibold'>
                {userData.public_repos}
              </span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <span className='text-white/70'>Followers</span>
              <span className='text-2xl font-semibold'>
                {userData.followers}
              </span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <span className='text-white/70'>Following</span>
              <span className='text-2xl font-semibold'>
                {userData.following}
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <span>Recently updated:</span>
            <div className='flex justify-between gap-4'>
              {userRepos.slice(0, 3).map((item) => (
                <RepoCard
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
      );
  }, [userData, userRepos]);

  return <>{display ? <div>{display}</div> : <div>Loading...</div>}</>;
};

export default GithubDisplay;
