import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Hero = () => {
  const heroStyle = {
    backgroundImage: "url('./Home/beautiful-cityscape.jpg')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: "1",
  };

  return (
    <section
      className="flex items-center justify-center relative min-h-screen w-full"
      style={heroStyle}
    >
      <div className="relative text-white px-4 sm:px-6 lg:px-8 max-w-6xl w-full py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="left space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Techeon: Your Digital Growth Catalyst in the USA
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              Elevate your online presence with expert e-commerce, graphic
              design, web design, social media marketing, and digital marketing
              services.
            </p>
          </div>
          <div className="right bg-white text-black p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300">
            <form className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-black">
                Unlock Your Growth Potential
              </h2>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-black">Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-2 focus:border-black rounded-lg transition-all duration-300 hover:border-black"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-black">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-2 focus:border-black rounded-lg transition-all duration-300 hover:border-black"
                />
              </div>
              <Button
                variant={"destructive"}
                className="w-full py-2 sm:py-3 px-3 sm:px-4 cursor-pointer text-white rounded-lg font-semibold hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300"
              >
                Get free Consulation
              </Button>
              <p className="text-xs sm:text-sm text-black text-center italic">
                We'll never share your details with third parties. We won't spam
                you.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;