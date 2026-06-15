"use client";

import React, { useState } from 'react';
import { Sparkles, Mail, Lock, ShieldCheck, ArrowRight, UserPlus, Info } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [workspace, setWorkspace] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      setSuccessMsg("Logged in successfully! Redirecting...");
      setTimeout(() => window.location.href = '/', 1200);
    } else if (mode === 'signup') {
      setSuccessMsg("Account created! Initializing workspace...");
      setTimeout(() => window.location.href = '/', 1500);
    } else {
      setSuccessMsg("Password reset email sent. Please check your inbox.");
      setTimeout(() => {
        setSuccessMsg('');
        setMode('login');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 animate-fade-in">
      <div className="w-full max-w-4xl bg-cardBg border border-cardBorder rounded-2xl shadow-lg flex overflow-hidden min-h-[500px]">
        
        {/* LEFT PANE: Authentication Forms */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          {/* Logo header */}
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="REVOXA Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="font-heading font-extrabold text-sm text-primaryText uppercase tracking-wider">REVOXA</span>
          </div>

          <div className="my-auto py-6 space-y-5">
            <div>
              <h2 className="text-xl font-heading font-extrabold text-primaryText">
                {mode === 'login' ? 'Welcome Back' : mode === 'signup' ? 'Create REVOXA Account' : 'Recover Password'}
              </h2>
              <p className="text-[11px] text-secondaryText mt-1">
                {mode === 'login' 
                  ? 'Access your product long-term memory intelligence' 
                  : mode === 'signup' 
                    ? 'Start organizing customer feedbacks trends today' 
                    : 'We will send a reset code link to your email'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              {mode === 'signup' && (
                <div className="space-y-1">
                  <label className="font-bold text-secondaryText uppercase block">Workspace Name</label>
                  <input
                    type="text"
                    value={workspace}
                    onChange={(e) => setWorkspace(e.target.value)}
                    placeholder="e.g. Acme Product Team"
                    className="w-full px-3.5 py-2.5 bg-secondaryBg rounded-xl focus:outline-none border border-cardBorder"
                    required
                  />
                </div>
              )}

              <div className="space-y-1">
                <label className="font-bold text-secondaryText uppercase block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondaryText" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-secondaryBg rounded-xl focus:outline-none border border-cardBorder"
                    required
                  />
                </div>
              </div>

              {mode !== 'forgot' && (
                <div className="space-y-1">
                  <label className="font-bold text-secondaryText uppercase block">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondaryText" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-secondaryBg rounded-xl focus:outline-none border border-cardBorder"
                      required
                    />
                  </div>
                </div>
              )}

              {successMsg && (
                <p className="text-[11px] text-success font-semibold py-1 flex items-center gap-1.5 animate-pulse">
                  <ShieldCheck className="w-4 h-4" />
                  {successMsg}
                </p>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-primary hover:opacity-95 text-white rounded-xl font-semibold shadow-sm transition-transform active:scale-95"
              >
                <span>
                  {mode === 'login' ? 'Sign In to Workspace' : mode === 'signup' ? 'Create Free Workspace' : 'Send Reset Link'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Google Sign In */}
            {mode !== 'forgot' && (
              <div className="space-y-3">
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-cardBorder"></div>
                  <span className="flex-shrink mx-4 text-secondaryText text-[9px] uppercase font-bold">Or continue with</span>
                  <div className="flex-grow border-t border-cardBorder"></div>
                </div>

                <button
                  onClick={() => {
                    setSuccessMsg("Connecting with Google Account...");
                    setTimeout(() => window.location.href = '/', 1200);
                  }}
                  className="w-full py-2.5 border border-cardBorder hover:bg-secondaryBg rounded-xl font-semibold text-secondaryText hover:text-primaryText flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Google Account</span>
                </button>
              </div>
            )}
          </div>

          {/* Form footer toggle options */}
          <div className="flex justify-between text-[10px] font-semibold text-secondaryText pt-4 border-t border-cardBorder">
            {mode === 'login' ? (
              <>
                <button onClick={() => setMode('signup')} className="hover:text-primaryAccent">
                  Need an account? Sign Up
                </button>
                <button onClick={() => setMode('forgot')} className="hover:text-primaryAccent">
                  Forgot Password?
                </button>
              </>
            ) : mode === 'signup' ? (
              <>
                <button onClick={() => setMode('login')} className="hover:text-primaryAccent">
                  Already have an account? Sign In
                </button>
                <span />
              </>
            ) : (
              <>
                <button onClick={() => setMode('login')} className="hover:text-primaryAccent">
                  Return to Sign In
                </button>
                <span />
              </>
            )}
          </div>
        </div>

        {/* RIGHT PANE: Branding Illustration */}
        <div className="hidden md:block md:w-1/2 bg-gradient-primary relative p-8 text-white flex flex-col justify-between">
          {/* Decorative radial blur background */}
          <div className="absolute inset-0 bg-black/10 z-0" />
          
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-white/20 px-2.5 py-1 rounded-full">
                REVOXA Platform
              </span>
              <h1 className="text-3xl font-heading font-extrabold mt-4 leading-tight">
                Enterprise Memory Intelligence.
              </h1>
              <p className="text-xs text-white/80 mt-2 max-w-sm">
                A permanent feedback brain. Synthesize customer reviews, generate roadmap recommendations, and resolve bugs.
              </p>
            </div>

            {/* Illustration placement */}
            <div className="my-8 relative w-full h-44 rounded-xl border border-white/20 bg-white/10 overflow-hidden shadow-md flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="REVOXA Logo" 
                className="max-h-[120px] w-auto object-contain drop-shadow-lg"
              />
            </div>

            <div className="flex gap-2 items-center text-[9px] text-white/70">
              <Info className="w-3.5 h-3.5" />
              <span>Y-Combinator Demo Day Standard UI layout</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
