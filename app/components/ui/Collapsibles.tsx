'use client';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { v4 as uuidv4 } from 'uuid';

import React, { useState } from 'react';

type Props = {
	questions: { question: string; answer: string }[];
};

const Collapsibles = ({ questions }: Props) => {
	return (
		<div className=' flex flex-col gap-4 w-full h-fit '>
			{questions.map((question) => (
				<Disclosure key={uuidv4()}>
					{({ open }) => (
						<>
							<Disclosure.Button
								className='flex w-full justify-between rounded-md px-4 py-3
						bg-secondary text-left text-sm font-medium text-text hover:bg-secondary/30 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-10'>
								<span>{question.question}</span>
								<ChevronUpIcon
									className={`${
										open ? 'rotate-180 transform' : ''
									} h-5 w-5 text-text transi`}
								/>
							</Disclosure.Button>
							<Transition enter='transiti'>
								<Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-text'>
									{question.answer}
								</Disclosure.Panel>
							</Transition>
						</>
					)}
				</Disclosure>
			))}
		</div>
	);
};

export default Collapsibles;
