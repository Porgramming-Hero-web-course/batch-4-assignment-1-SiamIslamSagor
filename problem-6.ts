{
  /* -------------------------------------------- */

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type PartialProfile = Partial<Profile>;

  function updateProfile(
    profile: Profile,
    updatedProfile: PartialProfile
  ): Profile {
    return {
      ...profile,
      ...updatedProfile,
    };
  }

  /* -------------------------------------------- */
}
