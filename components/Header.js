import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { user, error, isLoading } = useUser()

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">Arsens blog</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}

        </div>
        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
            {user && (
                <div className="flex h-16 flex-row gap-x-2 ">
                  <div className="mt-2">
                    <Link href={`/api/auth/logout`}>Logout</Link>
                  </div>
                  <img className='rounded-full'
                       src={user.picture}
                       alt={user.name}
                  />
                  <div className="flex flex-col justify-around px-2 text-xs">
                    <h2>{'Name: ' + user.name}</h2>
                    <p>{'Email: ' + user.email}</p>
                  </div>
                </div>
            )}
          {!user && (
              <div className="mt-2">
                <Link href={`/api/auth/login`}>Login</Link>
              </div>
          )}
          </span>
      </div>
    </div>
  );
};

export default Header;
