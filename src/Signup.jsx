import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Label } from './components/ui/label';
import { Github, Mail } from 'lucide-react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { signUp, user, signInWithOAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const { error } = await signUp(email, password);
      if (error) throw error;
      setMessage('Sign up successful! Please check your email to confirm your account.');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthSignup = async (provider) => {
    setLoading(true);
    setMessage('');
    try {
      const { error } = await signInWithOAuth(provider);
      if (error) throw error;
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <Card className="w-full max-w-md bg-slate-800 text-slate-200 border-slate-700 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-purple-400">Join Mission50LPA.dev</CardTitle>
          <CardDescription className="text-slate-400">Create your account to start your journey</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-slate-300">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-slate-300">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={loading}>
              {loading ? 'Loading...' : 'Sign Up'}
            </Button>
          </form>
          {message && <p className="mt-4 text-center text-sm text-green-400">{message}</p>}
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-700"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-800 px-2 text-slate-400">Or continue with</span>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <Button 
              variant="outline" 
              className="w-full bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600"
              onClick={() => handleOAuthSignup('github')}
              disabled={loading}
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button 
              variant="outline" 
              className="w-full bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600"
              onClick={() => handleOAuthSignup('google')}
              disabled={loading}
            >
              <Mail className="mr-2 h-4 w-4" /> Google
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <a href="/login" className="text-purple-400 hover:underline">Sign In</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;


