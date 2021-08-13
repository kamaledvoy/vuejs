<template>
  <div class="border w-max max-w-md py-2">
    <div class="flex justify-between py-2">
      <h1 class="text-center text-xl font-bold ml-5">
        {{ $t('tasks') }}
      </h1>
      <div>
        <div class="flex justify-center mr-2">
          <nuxt-link :to="switchLocalePath('he')" class="border rounded-l-md pl-4 pr-2 bg-gray text-gray-700 text-sm font-bold shadow">HE</nuxt-link>
          <nuxt-link :to="switchLocalePath('en')" class="border rounded-r-md pr-4 pl-2 bg-blue text-gray-200 text-sm font-bold shadow">EN</nuxt-link>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <ul class="w-full max-w-sm list-disc list-inside">
        <li class="mt-2">
          <span>
            {{ $t('write_unit_tests') }}
          </span>
          <span class="text-sm text-gray-100 px-2 border rounded-lg float-right bg-red">
            {{ $t('completed') }}
          </span>
        </li>
        <li class="mt-2">
          <span>
            {{ $t('buy_almond_milk') }}
          </span>
          <span class="text-sm text-gray-100 px-2 border rounded-lg float-right bg-dark-yellow">
            {{ $t('important') }}
          </span>
        </li>
        <li class="mt-2">
          <span>
            {{ $t('feed_the_cats') }}
          </span>
        </li>
        <li class="mt-2">
          <span>
            {{ $t('review_pull_request') }}
          </span>
          <span class="text-sm text-gray-100 px-2 border rounded-lg float-right bg-green">
            {{ $t('in_progress') }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  tasks: "Tasks"
  write_unit_tests: "write unit tests"
  buy_almond_milk: "buy almond milk"
  feed_the_cats: "feed the cats"
  write_documentation: "write documentation"
  in_progress: "In progress..."
  completed: "Completed!"
  important: "Important!"
he:
  tasks: "مهام"
  write_unit_tests: "كتابة اختبارات الوحدة"
  buy_almond_milk: "شراء حليب اللوز"
  feed_the_cats: "إطعام القطط"
  write_documentation: "كتابة الوثائق"
  in_progress: "في تقدم..."
  completed: "مكتمل!!"
  important: "مهم!"
</i18n>

<script>
export default {}
</script>
