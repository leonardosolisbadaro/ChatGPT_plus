/* eslint-disable @typescript-eslint/no-this-alias */
// ==UserScript==
// @name         ChatGPT Plus (+AIPRM)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-body
// @match        *://chat.openai.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const fetchInterceptor = {
  fetch: window.fetch.bind(window),

  defineSetterFetch: function () {
    const self = this;
    const fetchWrapper = {
      get fetch() {
        return self.interceptFetch.bind(self);
      },
      set fetch(value) {
        self.fetch = value;
      },
    };
    window.fetch = fetchWrapper.fetch;
  },

  interceptFetch: function (...args) {
    const fetchProxy = new Proxy(this.fetch, {
      apply: async (target, thisArg, argumentsList) => {
        // ... modification of the request (target, thisArg, argumentsList).
        // let response = await Reflect.apply(target, thisArg, argumentsList);
        // ... modification of the response (response).
        // return response;

        let response;

        // AIPRM
        if (
          argumentsList[0].includes('https://api.aiprm.com/api3/Users/Status')
        ) {
          console.log(argumentsList[0]);
          let json = {
            AccountSubPrompts: [],
            IsLinked: true,
            MaxNewPrivatePromptsAllowed: 0,
            MaxNewPublicPromptsAllowed: 0,
            Quota: {
              MaxLevel: 1000,
              MaxPrivateListItems: 0,
              MaxPromptPublicUpcoming: 0,
              TotalCustomContinue: 0,
              TotalCustomStyles: 0,
              TotalCustomTones: 0,
              TotalPrivateLists: 0,
              TotalPromptStorePrivate: 0,
            },
            UserLevelNo: 64,
            UserStatusNo: 64,
          };
          return new Response(JSON.stringify(json));
        }
        if (argumentsList[0].includes('https://api.aiprm.com/json/config')) {
          console.log(argumentsList[0]);
          let json = {
            Features: {
              Watermark: {
                Enabled: false,
                Config: {
                  Selectors: {
                    AIPRM__conversation__response:
                      '.text-base.gap-4.md\\:gap-6.m-auto.md\\:max-w-2xl.lg\\:max-w-xl.xl\\:max-w-3xl.p-4.md\\:py-6.flex.lg\\:px-0 .markdown.prose.w-full.break-words.dark\\:prose-invert',
                    'sm:AIPRM__conversation__response':
                      '.w-full.border-b.border-black\\/10.dark\\:border-gray-900\\/50.text-gray-800.dark\\:text-gray-100.group.bg-gray-50.dark\\:bg-\\[\\#444654\\]',
                  },
                },
              },
              LiveCrawling: {
                Enabled: false,
                Config: {
                  APIEndpointURL: 'https://corsproxy.io/?',
                  MaxCharacters: 14000,
                  MaxWords: 2000,
                  CrawledTextPrompt:
                    'The text is enclosed between "<CRAWLEDTEXT_[GUID]>" and "</CRAWLEDTEXT_[GUID]>". Make sure to also follow the instructions given below, if provided, after "</CRAWLEDTEXT_[GUID]>".\n\n<CRAWLEDTEXT_[GUID]>[CRAWLEDTEXT]</CRAWLEDTEXT_[GUID]>',
                  CrawledSourcePrompt:
                    'The source code is enclosed between "<CRAWLEDSOURCE_[GUID]>" and "</CRAWLEDSOURCE_[GUID]>". Make sure to also follow the instructions given below, if provided, after "</CRAWLEDSOURCE_[GUID]>".\n\n<CRAWLEDSOURCE_[GUID]>\n[CRAWLEDSOURCE]\n</CRAWLEDSOURCE_[GUID]>',
                },
              },
            },
          };
          return new Response(JSON.stringify(json));
        }

        // ChatGPT
        if (
          argumentsList[0].includes(
            'https://chat.openai.com/backend-api/accounts/check',
          )
        ) {
          console.log(argumentsList[0]);

          response = await Reflect.apply(target, thisArg, argumentsList);

          const data = await response.json();
          data.account_plan.is_paid_subscription_active = true;
          data.account_plan.subscription_plan = 'chatgptplusplan';
          data.account_plan.was_paid_customer = true;
          data.account_plan.has_customer_object = true;
          data.account_plan.subscription_expires_at_timestamp =
            new Date().getTime() + 2592000000;
          data.features = data.features.filter(
            (feature) =>
              !feature.includes('log_intercom_events') &&
              !feature.includes('log_statsig_events'),
          );
          data.features.push(
            'copy_to_clipboard',
            'model_switcher',
            'model_preview',
            'priority_driven_models_list',
            'tools',
            'tools1',
            'tools2',
            'tools3',
            'tools3_dev',
            'tools3_admin',
          );

          const modifiedResponse = new Response(JSON.stringify(data), {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
          });

          return modifiedResponse;
        }

        if (
          argumentsList[0].includes(
            'https://chat.openai.com/backend-api/aip/p?offset=0&limit=20&is_installed=true',
          )
        ) {
          console.log(argumentsList[0]);

          const json = {
            models: [
              {
                slug: 'gpt-4',
                max_tokens: 4095,
                title: 'GPT-4',
                description:
                  'Our most advanced model, available to Plus subscribers. GPT-4 excels at tasks that require advanced reasoning, complex instruction understanding, and more creativity.',
                tags: [],
                qualitative_properties: {},
                enabled_tools: [],
              },
              {
                slug: 'text-davinci-002-plugins',
                max_tokens: 8195,
                title: 'Plugins',
                description:
                  'An experimental model that knows when and how to use plugins',
                tags: [],
                qualitative_properties: {},
                enabled_tools: [],
              },
              {
                slug: 'text-davinci-002-render-sha',
                max_tokens: 4097,
                title: 'Default (GPT-3.5)',
                description:
                  'Optimized for speed, currently available to Plus users',
                tags: [],
                qualitative_properties: {},
                enabled_tools: [],
              },
              {
                slug: 'text-davinci-002-render-paid',
                max_tokens: 4097,
                title: 'Legacy (GPT-3.5)',
                description: 'The previous ChatGPT Plus model',
                tags: [],
                qualitative_properties: {},
                enabled_tools: [],
              },
            ],
          };

          return new Response(JSON.stringify(json));
        }

        // default
        return await Reflect.apply(target, thisArg, argumentsList);
      },
    });

    return Reflect.apply(fetchProxy, this, args);
  },
};

fetchInterceptor.defineSetterFetch();

window.addEventListener('beforeunload', function (e) {
  console.log('beforeunload');
  // debugger; // debug
  localStorage.clear();
  e.preventDefault();
});

(function () {
  'use strict';
  console.log('ChatGPT Plus (+AIPRM)', 'init');

  // ChatGPT
  localStorage.setItem(
    'oai/apps/hasSeenOnboarding/chat',
    `"${new Date().toISOString().substring(0, 10)}"`,
  );

  // AIPRM
  localStorage.setItem('lastPageSize', '4');
})();
