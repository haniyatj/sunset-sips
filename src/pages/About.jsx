import React from "react";
import NavBar from "../components/NavBar";

const AboutPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-grow bg-my-clr-100">
        {/* Header */}
        <div className="bg-blue-500 h-64 flex items-center justify-center">
          <img
            src="https://static.wixstatic.com/media/c89a5d_2846238506a7447d9aa65f21f644363a~mv2.png/v1/fill/w_1899,h_421,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c89a5d_2846238506a7447d9aa65f21f644363a~mv2.png"
            alt="Header Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap">
            {/* Left Column */}
            <div className="w-full md:w-1/2 px-4 flex justify-center">
              <div className="bg-my-clr-100 p-4">
                <div className="text-5xl font-bold font-league uppercase">
                  <p>WESTERN</p>
                  <p>STYLE</p>
                  <p>DESERT.</p>
                  <p>EASTERN</p>
                  <p>FLAVOUR</p>
                  <p>INFLUENCE.</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
              <div className="bg-my-clr-100 p-4">
                <p className="text-gray-900">
                  Founded by cousins Chatchai "Chai" Huadwattana and Ace
                  Watanasuparp, Spot Dessert Bar opened its doors in November
                  2009 at 13 St. Marks Place, in New York City's East Village.
                  Formed under Chace Restaurant Group (CRG), Spot brings
                  together decades of restaurant and cooking experience to
                  create a dessert concept that emphasizes tradition and
                  innovation. Think Western style desserts, influenced by
                  Eastern flavors.
                </p>
                <p className="text-gray-900 mt-4">
                  Raised in Thailand, Chai explored the country's culinary
                  depths, leading him to cook for a revered Thai temple, as he
                  was influenced by Bangkok's famed Wat Sai Floating Market.
                  Growing up in NYC, Ace worked at several of his parents'
                  restaurants. From waiting tables to cooking, Ace learned the
                  ins and outs of the restaurant business, and ever evolving
                  culinary scene of New York City. Today, Chai and Ace are
                  owners of over 15 restaurants including Obao, Lucky Cat, Aroy
                  Dee and Gai Chicken & Rice
                </p>

                <p className="text-gray-900 mt-4">
                  Soon after opening, Spot partnered with Chef Ian Kittichai.
                  Chef's connection to food began as a child in his
                  working-class Bangkok neighborhood, where he pushed a cart
                  selling food he made with his mother. At 30 years old, Chef
                  Ian became the first Thai national to be appointed the
                  Executive Chef of a five-star hotel, thanks to his training in
                  haute cuisine and professional experiences in France, Spain,
                  the US, Japan, England and Australia. Present day, Chef is
                  globally recognized for his influence on Thai cuisine and
                  unique approach to classic flavors and ingredients, using
                  varied cooking techniques. His restaurants can be found around
                  the world, including Akanee and Issaya Siamese Club in
                  Bangkok, Soi Social in Singapore and Plaa in Hong Kong to name
                  a few. Chef Ian has been named the Asia Geographical
                  Indication Ambassador, designated the Officier de l'Ordre du
                  Merite Agricole by the French Republic and is a founding
                  councilmember of the World Street Food Congress. An
                  award-winning chef, cookbook author, restaurateur and tv
                  personality, Chef Kittichai can be seen on Thailand's Iron
                  Chef, Masterchef and Masterchef Junior.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-my-clr-100 py-4 text-black font-league flex items-center">
          <div className="w-1/2 flex justify-center h-90">
            <img
              src="https://t4.ftcdn.net/jpg/06/34/21/43/360_F_634214394_vx8R4PrtsBi31SocYDjzW9Rk0rMo7O8p.jpg"
              alt="Chef Ian Kittichai"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-1/2 px-4">
            <h2 className="font-bold">OUR CHEF</h2>
            <p>
              <span className="font-bold">
                Iron Chef of Thailand, Ian Kittichai
              </span>
            </p>
            <p>
              Our inspiration for Spot Dessert Bar came when during our travels
              around the world, it hit us that there were very few restaurants
              in the United States that infused classic American desserts with
              an Asian influence. Spot’s vision is now coming to life with the
              help and guidance of consulting Asian pastry chef guru Ian
              Chalermkittichai (“Kittichai”). Chef Kittichai has created a new
              menu for Spot, offering fresh interpretations of desserts he
              enjoyed from his childhood and his extensive travels.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black py-4 text-center text-white font-league mt-auto">
          Sunset Sips
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
