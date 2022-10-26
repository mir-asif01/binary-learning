import React from 'react';

const Faq = () => {
    return (
        <div>
            <h1 className='text-2xl my-3'>Frequently Asked Questions</h1>
            <div className='w-full md:w-2/4 mx-auto my-3 p-2 '>
                <div tabIndex={0} className="bg-violet-600 text-white collapse collapse-plus border border-base-300 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    What is programming?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms</p>
                    </div>
                </div>
                <div tabIndex={0} className="bg-violet-600 text-white collapse collapse-plus border border-base-300 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How many programming languages are there?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} According to the Online Historical Encyclopaedia of Programming Languages, people have created about 8,945 coding languages. Today, various sources report anywhere from 250-2,500 coding languages, although far fewer rank as top contenders in the commonly used group.</p>
                    </div>
                </div>
                <div tabIndex={0} className="bg-violet-600 text-white collapse collapse-plus border border-base-300 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        When Programming was invented?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} 1883: The first programming language was developed in 1883 when Ada Lovelace and Charles Babbage worked together on the Analytical Engine, which was a primitive mechanical computer.</p>
                    </div>
                </div>
                <div tabIndex={0} className="bg-violet-600 text-white collapse collapse-plus border border-base-300 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    What is compiler?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} In computing, a compiler is a computer program that translates computer code written in one programming language into another language. The name "compiler" is primarily used for programs that translate source code from a high-level programming language to a lower level language to create an executable program. </p>
                    </div>
                </div>
                <div tabIndex={0} className="bg-violet-600 text-white collapse collapse-plus border border-base-300 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is interpreter?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} In computer science, an interpreter is a computer program that directly executes instructions written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program.</p>
                    </div>
                </div>
                <div tabIndex={0} className="bg-violet-600 text-white collapse collapse-plus border border-base-300 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    What is competitive programming?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. Contestants are referred to as sport programmers. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;