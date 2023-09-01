<script setup lang="ts">
import {
  turnIntoTextCommand,
  wrapInBlockquoteCommand,
  wrapInHeadingCommand,
  downgradeHeadingCommand,
  createCodeBlockCommand,
  insertHardbreakCommand,
  insertHrCommand,
  insertImageCommand,
  updateImageCommand,
  wrapInOrderedListCommand,
  wrapInBulletListCommand,
  sinkListItemCommand,
  splitListItemCommand,
  liftListItemCommand,
  liftFirstListItemCommand,
  toggleEmphasisCommand,
  toggleInlineCodeCommand,
  toggleStrongCommand,
  toggleLinkCommand,
  updateLinkCommand,
} from '@milkdown/preset-commonmark'
// 编辑器  Ctrl + z 插件
import { redoCommand, undoCommand } from '@milkdown/plugin-history'

import {
  insertTableCommand,
  toggleStrikethroughCommand,
} from '@milkdown/preset-gfm'
</script>

<template>
  <div class="menu">
    <div icon="undo" @click="undoCommand">undo</div>
    <div icon="redo" @click="redoCommand">redo</div>
    <div icon="format_bold" @click="toggleStrongCommand">format_bold</div>
    <div icon="format_italic" @click="toggleEmphasisCommand">format_italic</div>
    <div icon="format_strikethrough" @click="toggleStrikethroughCommand">
      format_strikethrough
    </div>
    <div icon="table" @click="insertTableCommand">table</div>
    <div icon="format_list_bulleted" @click="wrapInBulletListCommand">
      format_list_bulleted
    </div>
    <div icon="format_list_numbered" @click="wrapInOrderedListCommand">
      format_list_numbered
    </div>
    <div icon="format_quote" @click="wrapInBlockquoteCommand">format_quote</div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  border: 1px solid var(--kungalgame-blue-4);
  div {
    margin: 10px;
    &:hover {
      cursor: pointer;
      color: var(--kungalgame-blue-4);
    }
  }
}
</style>
