<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;

class GoogleAuthController extends Controller
{
    /**
     * Redirect the user to the Google authentication page.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Handle Google callback.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function handleGoogleCallback()
    {
        try {
            // Retrieve user information from Google
            $googleUser = Socialite::driver('google')->user();

            // Find or create the user in the database
            $user = User::firstOrCreate(
                ['email' => $googleUser->getEmail()],
                [
                    'name' => $googleUser->getName(),
                    'google_id' => $googleUser->getId(),
                    'profile_picture' => $googleUser->getAvatar(),
                    'role' => 'recipient', // Default role, you can adjust this logic
                    'password' => bcrypt('random_password'), // You can set a default password for social logins
                ]
            );

            // Log the user in
            Auth::login($user);

            // Redirect based on user role
            return $this->redirectBasedOnRole($user);
        } catch (\Exception $e) {
            return redirect('/login')->with('error', 'Failed to login with Google');
        }
    }

    /**
     * Redirect user based on role.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    private function redirectBasedOnRole(User $user)
    {
        // Check the user's role and redirect accordingly
        if ($user->role === 'admin') {
            return redirect()->route('admin.dashboard'); // Redirect to Admin Dashboard
        }

        if ($user->role === 'foodbank') {
            return redirect()->route('foodbank.dashboard'); // Redirect to Foodbank Dashboard
        }

        if ($user->role === 'donor') {
            return redirect()->route('donor.dashboard'); // Redirect to Donor Dashboard
        }

        // Default redirect for 'recipient' role
        return redirect()->route('recipient.dashboard'); // Redirect to Recipient Dashboard
    }
}
