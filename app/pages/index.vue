<template>
    <div>
        AFCON 2026 - Quarter Finals
    </div>

</template>


<script setup>

import { useMatchStore } from '~/stores/matchStore';

const matches = useMatchStore()

matches.fetchMatches();

</script>