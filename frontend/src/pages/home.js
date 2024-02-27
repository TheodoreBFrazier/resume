import React from "react";

function Home() {
    return (
        <div className="Home">
            <style>
                {`
                    .services-grid {
                  display: flex;
                  flex-wrap: wrap;
                    }

                    .grid-item {
                        box-sizing: border-box;
                        width: 33.33%;
                        padding: 20px;
                        border: 1px solid #ccc;
                        text-align: center;
                    }
                `}
            </style>
            <div className="wraapper">
                <h1>
                    Hi! We are passionate about making the web a better place.
                </h1>
                <p>Testing monsterrat.</p>
            </div>
            <div className="services-grid">
                <div class="grid-item">
                    <h3>
                        Account Management
                    </h3>
                    <p>
                        Whenever you find yourself in a customer service puzzle,
                        <br />
                        I'm the missing piece that says, 'I can help!
                    </p>
                </div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
            </div>
        </div>
    );
};

export default Home;