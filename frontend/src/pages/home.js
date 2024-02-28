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
                        text-align: center;
                    }
                `}
            </style>
            <div className="wraapper">
                <h1>
                    Hi!<br /> I'm Theodore.
                </h1>
                <p>Testing monsterrat.</p>
            </div>
            <div>
            <h2>We are <i>passionate</i> about making the web a better place.</h2>
            </div>
            <div className="services-grid">
                <div class="grid-item">
                    <h3 style={{ color: '#0b6e4f', fontSize: '16pt' }}>
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
            <div>
                <h3><i>I've worked for several prestigious employers, like:</i></h3>
            </div>
        </div>
    );
};

export default Home;